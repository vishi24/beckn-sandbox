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

    @Post('/select')
    select(@Body() mobilityRequest: MobilityRequestDto) {
        return this.service.get(mobilityRequest.context.domain).select(mobilityRequest);
    }

    @Post('/init')
    init(@Body() mobilityRequest: MobilityRequestDto) {
        return this.service.get(mobilityRequest.context.domain).init(mobilityRequest);
    }

    @Post('/confirm')
    confirm(@Body() mobilityRequest: MobilityRequestDto) {
        return this.service.get(mobilityRequest.context.domain).confirm(mobilityRequest);
    }
}
