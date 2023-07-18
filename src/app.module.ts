import { Module } from "@nestjs/common";

import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { CommonModule } from "./common/common.module";
import { MobilityModule } from "./mobility/mobility.module";
import { FinancialServicesModule } from "./financial-services/financial-services.module";

@Module({
    imports: [MobilityModule, CommonModule, FinancialServicesModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
    /* body */
}
