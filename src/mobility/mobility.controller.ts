import { Controller, Get } from '@nestjs/common';
import { MobilityService } from './mobility.service';

@Controller()
export class MobilityController {
    constructor(private readonly service: MobilityService) { }

    @Get('/search')
    search(): string {
        return this.service.get("nic2004:60221").search();
    }
}
