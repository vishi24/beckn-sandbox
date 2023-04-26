import { MobilityRequestDto } from "src/mobility/dto/request.dto";


export class SearchRequestDto extends MobilityRequestDto {
    message: {
        intent: {
            fulfillment: {
                start: {
                    location: {
                        gps: string;
                    }
                },
                end: {
                    location: {
                        gps: string;
                    }
                }
            }
        }
    }
}