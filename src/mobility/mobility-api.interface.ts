import { MobilityRequestDto } from "./dto/request.dto";
import { MobilityResponseDto } from "./dto/response.dto";

export interface MobilityApiInterface {
    search: (mobilityRequestDto: MobilityRequestDto) => any;
    select: () => any;
    init: () => string;
    confirm: () => string;
    status: () => string;
    track: (mobilityRequestDto: MobilityRequestDto) => any;
    cancel: (mobilityRequestDto: MobilityRequestDto) => any;
    update: () => string;
    rating: () => string;
    support: () => string;

}
