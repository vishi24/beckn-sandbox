import { Injectable } from "@nestjs/common";
import { Industry4_0ApiInterface } from "../industry-4.0-api.interface";
import { Industry_4_0_Request_DTO } from "../dto/request.dto";
import * as SearchResponse from "./response/response.search.json";
import * as InitResponse from "./response/response.init.json";

@Injectable()
export class Three_D_PritingService implements Industry4_0ApiInterface {
    search = (industry_4_0_Request_DTO: Industry_4_0_Request_DTO) => {
        return SearchResponse;
    };
    select = (industry_4_0_Request_DTO: Industry_4_0_Request_DTO) => {
        return {};
    };
    init = (industry_4_0_Request_DTO: Industry_4_0_Request_DTO) => {
        return InitResponse;
    };
    confirm = (industry_4_0_Request_DTO: Industry_4_0_Request_DTO) => {
        return {};
    };
    status = (industry_4_0_Request_DTO: Industry_4_0_Request_DTO) => {
        return {};
    };
    cancel = (industry_4_0_Request_DTO: Industry_4_0_Request_DTO) => {
        return {};
    };
    update = (industry_4_0_Request_DTO: Industry_4_0_Request_DTO) => {
        return {};
    };
    support = (industry_4_0_Request_DTO: Industry_4_0_Request_DTO) => {
        return {};
    };
    rating = (industry_4_0_Request_DTO: Industry_4_0_Request_DTO) => {
        return {};
    };
    track = (industry_4_0_Request_DTO: Industry_4_0_Request_DTO) => {
        return {};
    };
}
