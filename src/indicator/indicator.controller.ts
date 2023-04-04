import { Controller, Get } from '@nestjs/common';
import { IndicatorService } from './indicator.service';
import { Indicators } from './interfaces/indicators.interface';

@Controller('indicator')
export class IndicatorController {
  constructor(private indicatorSvc: IndicatorService) {}
  @Get()
  async getBitcoinPrice() {
    const indicators: Indicators = await this.indicatorSvc.getIndicators();
    const response = {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'OPTIONS,GET',
      },
      body: indicators,
    };
    return response;
  }
}
