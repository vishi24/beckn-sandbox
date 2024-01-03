import { Injectable } from "@nestjs/common";
import { v4 as uuidv4 } from "uuid";
import * as fs from "fs";
import { Industry4_0ApiInterface } from "../industry-4.0-api.interface";
import { Industry_4_0_Request_DTO } from "../dto/request.dto";
import { BPP_ID, BPP_URI } from "../../common/constants";
import * as SearchResponse from "./response/response.search.json";
import * as InitResponse from "./response/response.init.json";
import * as ConfirmResponse from "./response/response.confirm.json";
import * as SelectResponse1 from "./response/response.select-1.json";
import * as SelectResponse2 from "./response/response.select-2.json";
import * as StatusResponse from "./response/response.status.json";
import * as UpdateResponse from "./response/response.update.json";
import * as SupportResponse from "./response/response.support.json";
import * as CancelResponse from "./response/response.cancel.json";
import * as TrackResponse from "./response/response.track.json";
import * as RatingResponse from "./response/response.rating.json";
// import * as StatusRecord from "./statusRecord.json";
import { join } from "path";

const orderStatus = [
    { statusCode: "ORDER_ACCEPTED", longDesc: "The order is accepted" },
    { statusCode: "IN_ASSEMBLY_LINE", longDesc: "The item is in assembly line" },
    { statusCode: "ITEM_DISPATCHED", longDesc: "The item is dispatched" },
    { statusCode: "DELIVERED", longDesc: "The order is delivered" },
];
@Injectable()
export class AssemblyService implements Industry4_0ApiInterface {
    search = (industry_4_0_Request_DTO: Industry_4_0_Request_DTO) => {
        SearchResponse.context.bpp_id = BPP_ID;
        SearchResponse.context.bpp_uri = BPP_URI;
        return SearchResponse;
    };
    select = (industry_4_0_Request_DTO: Industry_4_0_Request_DTO) => {
        const Select1 = industry_4_0_Request_DTO?.message?.order?.tags?.find((tag: any) => tag?.descriptor?.name === "select-1");

        const Select2 = industry_4_0_Request_DTO?.message?.order?.tags?.find((tag: any) => tag?.descriptor?.name === "select-2");

        if (Select1) {
            SelectResponse1.context.bpp_id = BPP_ID;
            SelectResponse1.context.bpp_uri = BPP_URI;
            return SelectResponse1;
        }
        if (Select2) {
            SelectResponse2.context.bpp_id = BPP_ID;
            SelectResponse2.context.bpp_uri = BPP_URI;
            return SelectResponse2;
        }
    };
    init = (industry_4_0_Request_DTO: Industry_4_0_Request_DTO) => {
        InitResponse.context.bpp_id = BPP_ID;
        InitResponse.context.bpp_uri = BPP_URI;
        return InitResponse;
    };
    confirm = (industry_4_0_Request_DTO: Industry_4_0_Request_DTO) => {
        ConfirmResponse.context.bpp_id = BPP_ID;
        ConfirmResponse.context.bpp_uri = BPP_URI;
        const orderId = uuidv4();

        const StatusRecord = JSON.parse(fs.readFileSync(join(__dirname, "statusRecord.json"), { encoding: "utf-8" }));
        if (StatusRecord?.orders?.length > 20) {
            StatusRecord.orders = [];
        }
        StatusRecord.orders.push({ orderId, status: orderStatus[0] });
        fs.writeFileSync(join(__dirname, "statusRecord.json"), JSON.stringify(StatusRecord));
        ConfirmResponse.message.order.id = orderId;
        ConfirmResponse.message.order.fulfillments[0].state.descriptor.code = orderStatus[0].statusCode;
        ConfirmResponse.message.order.fulfillments[0].state.descriptor.short_desc = orderStatus[0].longDesc;

        return ConfirmResponse;
    };
    status = (industry_4_0_Request_DTO: Industry_4_0_Request_DTO) => {
        StatusResponse.context.bpp_id = BPP_ID;
        StatusResponse.context.bpp_uri = BPP_URI;

        const StatusRecord = JSON.parse(fs.readFileSync(join(__dirname, "statusRecord.json"), { encoding: "utf-8" }));
        let requiredOrder = StatusRecord?.orders?.find((elem: any) => elem?.orderId === industry_4_0_Request_DTO?.message?.order_id);
        if (requiredOrder) {
            if (requiredOrder.status.statusCode === "DELIVERED") {
                StatusResponse.message.order.id = industry_4_0_Request_DTO?.message?.order_id;
                StatusResponse.message.order.fulfillments[0].state.descriptor.code = requiredOrder?.status?.statusCode;
                StatusResponse.message.order.fulfillments[0].state.descriptor.short_desc = requiredOrder?.status?.longDesc;
                StatusResponse.message.order.fulfillments[0].state.updated_at = new Date().toISOString();
            } else {
                let oldOrderStatusIndex = 0;
                orderStatus.find((elem: any, i: number) => {
                    if (elem?.statusCode === requiredOrder?.status?.statusCode) {
                        oldOrderStatusIndex = i;
                        return;
                    }
                });
                requiredOrder = {
                    ...requiredOrder,
                    status: {
                        statusCode: orderStatus[oldOrderStatusIndex + 1]?.statusCode,
                        longDesc: orderStatus[oldOrderStatusIndex + 1]?.longDesc,
                    },
                };
                StatusResponse.message.order.id = industry_4_0_Request_DTO?.message?.order_id;
                StatusResponse.message.order.fulfillments[0].state.descriptor.code = requiredOrder?.status?.statusCode;
                StatusResponse.message.order.fulfillments[0].state.descriptor.short_desc = requiredOrder?.status?.longDesc;
                StatusResponse.message.order.fulfillments[0].state.updated_at = new Date().toISOString();
                const newStatusRecord = StatusRecord?.orders?.map((elem: any) => {
                    if (elem?.orderId === requiredOrder?.orderId) {
                        return requiredOrder;
                    }
                    return elem;
                });
                fs.writeFileSync(join(__dirname, "statusRecord.json"), JSON.stringify({ orders: newStatusRecord }));
            }
        }
        return StatusResponse;
    };
    cancel = (industry_4_0_Request_DTO: Industry_4_0_Request_DTO) => {
        CancelResponse.context.bpp_id = BPP_ID;
        CancelResponse.context.bpp_uri = BPP_URI;
        return CancelResponse;
    };
    update = (industry_4_0_Request_DTO: Industry_4_0_Request_DTO) => {
        UpdateResponse.context.bpp_id = BPP_ID;
        UpdateResponse.context.bpp_uri = BPP_URI;
        return UpdateResponse;
    };
    support = (industry_4_0_Request_DTO: Industry_4_0_Request_DTO) => {
        SupportResponse.context.bpp_id = BPP_ID;
        SupportResponse.context.bpp_uri = BPP_URI;
        return SupportResponse;
    };
    rating = (industry_4_0_Request_DTO: Industry_4_0_Request_DTO) => {
        RatingResponse.context.bpp_id = BPP_ID;
        RatingResponse.context.bpp_uri = BPP_URI;
        return RatingResponse;
    };
    track = (industry_4_0_Request_DTO: Industry_4_0_Request_DTO) => {
        TrackResponse.context.bpp_id = BPP_ID;
        TrackResponse.context.bpp_uri = BPP_URI;
        return TrackResponse;
    };
}
