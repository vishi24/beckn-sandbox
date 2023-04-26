import { Injectable } from '@nestjs/common';
import { MobilityResponseDto } from 'src/mobility/dto/response.dto';
import { MobilityApiInterface } from 'src/mobility/mobility-api.interface';
import { SearchRequestDto } from './dto/search-request.dto';
import * as searchResponse from './response/response.search.json'
import * as selectResponse from './response/response.select.json'

@Injectable()
export class OndcApiService implements MobilityApiInterface {
    search = function (searchRequest: SearchRequestDto) {
        return searchResponse
    };
    select: () => string;
    init: () => string;
    confirm: () => string;
    status: () => string;
    track: () => string;
    cancel: () => string;
    update: () => string;
    rating: () => string;
    support: () => string;
}
