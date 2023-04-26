import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MobilityModule } from './mobility/mobility.module';
import { CommonModule } from './common/common.module';

@Module({
  imports: [MobilityModule, CommonModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
