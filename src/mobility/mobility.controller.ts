import { Body, Controller, Get, Post } from '@nestjs/common';
import { MobilityRequestDto } from './dto/request.dto';
import { MobilityService } from './mobility.service';

@Controller()
export class MobilityController {
    constructor(private readonly service: MobilityService) { }

    @Post('/search')
    search(@Body() mobilityRequest: MobilityRequestDto) {
        return this.service.get(mobilityRequest.context.domain).search(mobilityRequest);
    }
}
