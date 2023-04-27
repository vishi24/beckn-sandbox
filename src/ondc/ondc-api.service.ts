import { Injectable } from '@nestjs/common';
import { MobilityApiInterface } from 'src/mobility/mobility-api.interface';
import { InitRequestDto } from './dto/init-request.dto';
import { SearchRequestDto } from './dto/search-request.dto';
import { SelectReqDto } from './dto/select-request.dto';
import * as selectResponse from './response/response.select.json'
import * as initResponse from './response/response.init.json'
import * as confirmResponse from './response/response.confirm.json'
import { ConfirmRequestDto } from './dto/confirm-request.dto';
import { TrackRequestDto } from './dto/track-request.dto';
import { CancelRequestDto } from './dto/cancel-request.dto';
import * as searchResponse from './response/response.search.json';
import * as trackResponse from './response/response.track.json';
import * as cancelResponse from './response/response.cancel.json';

@Injectable()
export class OndcApiService implements MobilityApiInterface {
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
    status: () => string;
    track = function (trackRequest: TrackRequestDto) {
        return trackResponse;
    };
    cancel = function (cancelRequest: CancelRequestDto) {
        return cancelResponse;
    };
    update: () => string;
    rating: () => string;
    support: () => string;
}
