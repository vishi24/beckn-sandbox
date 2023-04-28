import { Injectable } from '@nestjs/common';
import { MobilityApiInterface } from 'src/mobility/mobility-api.interface';
import { ConfirmRequestDto } from './dto/confirm.request.dto';
import { InitRequestDto } from './dto/init-request.dto';
import { SearchRequestDto } from './dto/search-request.dto';
import { SelectReqDto } from './dto/select-request.dto';
import { StatusRequestDto } from './dto/status-request.dto';
import * as searchResponse from './response/response.search.json'
import * as selectResponse from './response/response.select.json'
import * as initResponse from './response/response.init.json'
import * as confirmResponse from './response/response.confirm.json'
import * as statusResonse from './response/response.status.json'

@Injectable()
export class UmtcApiService implements MobilityApiInterface {
    search = function (searchRequest: SearchRequestDto) {
        return searchResponse
    };
    select = function (selectRequestDto: SelectReqDto) {
        return selectResponse
    };
    init = function (initRequestDto: InitRequestDto) {
        return initResponse
    };
    confirm = function (confirmRequestDto: ConfirmRequestDto) {
        return confirmResponse
    };
    status = function (statusRequestDto: StatusRequestDto) {
        return statusResonse
    };
    track: () => string;
    cancel: () => string;
    update: () => string;
    rating: () => string;
    support: () => string;
}

