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
import { UpdateRequestDto } from './dto/update-request.dto';
import { SupportRequestDto } from './dto/support-request.dto';
import { RatingRequestDto } from './dto/rating-request.dto';
import { StatusRequestDto } from './dto/status-request.dto';
import * as searchResponse from './response/response.search.json';
import * as trackResponse from './response/response.track.json';
import * as cancelResponse from './response/response.cancel.json';
import * as updateResponse from './response/response.update.json';
import * as supportResponse from './response/response.support.json';
import * as ratingResponse from './response/response.rating.json';
import * as statusResonse from './response/response.status.json'

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
    status = function (statusRequestDto: StatusRequestDto) {
        return statusResonse
    };

    track = function (trackRequest: TrackRequestDto) {
        return trackResponse;
    };
    cancel = function (cancelRequest: CancelRequestDto) {
        return cancelResponse;
    };
    update = function (updateRequest: UpdateRequestDto) {
        return updateResponse;
    };
    support = function (supportRequest: SupportRequestDto) {
        return supportResponse;
    };
    rating = function (ratingRequest: RatingRequestDto) {
        return ratingResponse;
    };
}
