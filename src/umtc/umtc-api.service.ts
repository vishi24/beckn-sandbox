import { Injectable } from '@nestjs/common';
import { MobilityApiInterface } from 'src/mobility/mobility-api.interface';

@Injectable()
export class UmtcApiService implements MobilityApiInterface {
    search = function () {
        return "UMTC search";
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

