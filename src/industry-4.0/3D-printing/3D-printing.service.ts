import { Injectable } from "@nestjs/common";
import { Industry4_0ApiInterface } from "../industry-4.0-api.interface";
import { Industry_4_0_Request_DTO } from "../dto/request.dto";
import * as SearchResponse from "./response/response.search.json";
import * as InitResponse from "./response/response.init.json";

import * as SearchResponse from "./response/response.search.json";
import * as InitResponse from "./response/response.init.json";
import * as ConfirmResponse from "./response/response.confirm.json";
//select
import * as StatusResponse from "./response/response.status-dispatched.json";
import * as UpdateResponse from "./response/response.update.json";
import * as SupportResponse from "./response/response.support.json";
import * as CancelResponse from "./response/response.cancel.json";
import * as TrackResponse from "./response/response.track.json";

@Injectable()
export class Three_D_PrintingService implements Industry4_0ApiInterface {
    search = (industry_4_0_Request_DTO: Industry_4_0_Request_DTO) => {
        return {SearchResponse};
    };
    select = (industry_4_0_Request_DTO: Industry_4_0_Request_DTO) => {
        return {};
    };
    init = (industry_4_0_Request_DTO: Industry_4_0_Request_DTO) => {
        return {InitResponse};
    };
    confirm = (industry_4_0_Request_DTO: Industry_4_0_Request_DTO) => {
        return {ConfirmResponse};
    };
    status = (industry_4_0_Request_DTO: Industry_4_0_Request_DTO) => {
        return {StatusResponse};
    };
    cancel = (industry_4_0_Request_DTO: Industry_4_0_Request_DTO) => {
        return {CancelResponse};
    };
    update = (industry_4_0_Request_DTO: Industry_4_0_Request_DTO) => {
        return {UpdateResponse};
    };
    support = (industry_4_0_Request_DTO: Industry_4_0_Request_DTO) => {
        return {SupportResponse};
    };
    rating = (industry_4_0_Request_DTO: Industry_4_0_Request_DTO) => {
        return {};
    };
    track = (industry_4_0_Request_DTO: Industry_4_0_Request_DTO) => {
        return {TrackResponse};
    };
}
