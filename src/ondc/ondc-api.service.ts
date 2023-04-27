import { Injectable } from '@nestjs/common';
import { MobilityApiInterface } from 'src/mobility/mobility-api.interface';
import { SearchRequestDto } from './dto/search-request.dto';
import * as searchResponse from './response/response.search.json'

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
