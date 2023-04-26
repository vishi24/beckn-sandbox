import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MobilityModule } from './mobility/mobility.module';

@Module({
  imports: [MobilityModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
