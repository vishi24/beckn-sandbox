import { Injectable } from '@nestjs/common';
import { MobilityResponseDto } from 'src/mobility/dto/response.dto';
import { MobilityApiInterface } from 'src/mobility/mobility-api.interface';
import { SearchRequestDto } from './dto/search-request.dto';
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
    select: () => string;
    init: () => string;
    confirm: () => string;
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
