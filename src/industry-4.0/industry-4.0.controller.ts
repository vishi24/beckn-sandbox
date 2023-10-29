import { Body, Controller, Post } from "@nestjs/common";
import { Industry40Service } from "./industry-4.0.service";
import { Industry_4_0_Request_DTO } from "./dto/request.dto";

@Controller("industry-4.0")
export class Industry40Controller {
    constructor(private readonly industry40Service: Industry40Service) {}

    @Post("/search")
    search(@Body() industry40Request: Industry_4_0_Request_DTO) {
        return this.industry40Service.get(industry40Request.context.domain).search(industry40Request);
    }

    @Post("/init")
    init(@Body() industry40Request: Industry_4_0_Request_DTO) {
        return this.industry40Service.get(industry40Request.context.domain).init(industry40Request);
    }
}
