import { Injectable } from "@nestjs/common";
import { LocalRetailApiInterface } from "../local-retail-api.interface";
import { Local_Retail_Request_DTO } from "../dto/local-retail-request.dto";

import * as SearchResponse from "./response/response.search.json";
import * as InitResponse from "./response/response.init.json";
import * as ConfirmResponse from "./response/response.confirm.json";
import * as SelectResponse from "./response/response.select.json";
import * as StatusResponse from "./response/response.status.json";
import * as UpdateResponse from "./response/response.update.json";
import * as SupportResponse from "./response/response.support.json";
import * as CancelResponse from "./response/response.cancel.json";
import * as TrackResponse from "./response/response.track.json";
import * as RatingResponse from "./response/response.rating.json";

@Injectable()
export class RetailService implements LocalRetailApiInterface {
    search = (request_DTO: Local_Retail_Request_DTO) => {
        return SearchResponse;
    };
    select = (request_DTO: Local_Retail_Request_DTO) => {
        return SelectResponse;
    };
    init = (request_DTO: Local_Retail_Request_DTO) => {
        return InitResponse;
    };
    confirm = (request_DTO: Local_Retail_Request_DTO) => {
        return ConfirmResponse;
    };
    status = (request_DTO: Local_Retail_Request_DTO) => {
        return StatusResponse;
    };
    cancel = (request_DTO: Local_Retail_Request_DTO) => {
        return CancelResponse;
    };
    update = (request_DTO: Local_Retail_Request_DTO) => {
        return UpdateResponse;
    };
    support = (request_DTO: Local_Retail_Request_DTO) => {
        return SupportResponse;
    };
    rating = (request_DTO: Local_Retail_Request_DTO) => {
        return RatingResponse;
    };
    track = (request_DTO: Local_Retail_Request_DTO) => {
        return TrackResponse;
    };
}
