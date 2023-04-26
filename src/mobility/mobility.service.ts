import { Injectable } from '@nestjs/common';
import { OndcApiService } from 'src/ondc/ondc-api.service';
import { UmtcApiService } from 'src/umtc/umtc-api.service';
import { MobilityApiInterface } from './mobility-api.interface';
import { MobilityTypeEnum } from './mobility-type.enum';

@Injectable()
export class MobilityService {
    get(domain: string): MobilityApiInterface {
        switch (domain) {
            case MobilityTypeEnum.ONDC:
                return new OndcApiService();
            case MobilityTypeEnum.UMTC:
                return new UmtcApiService();
            default:
                return new OndcApiService();
        }
    }
}
