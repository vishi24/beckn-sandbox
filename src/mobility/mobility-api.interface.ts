import { MobilityRequestDto } from "./dto/request.dto";

export interface MobilityApiInterface {
    search: (mobilityRequestDto: MobilityRequestDto) => any;
    select: (mobilityRequestDto: MobilityRequestDto) => any;
    init: (mobilityRequestDto: MobilityRequestDto) => any;
    confirm: (mobilityRequestDto: MobilityRequestDto) => any;
    status: () => string;
    track: () => string;
    cancel: () => string;
    update: () => string;
    rating: () => string;
    support: () => string;
}
