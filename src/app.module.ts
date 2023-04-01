import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { IndicatorModule } from './indicator/indicator.module';

@Module({
  imports: [IndicatorModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
