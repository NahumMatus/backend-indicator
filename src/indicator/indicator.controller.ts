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
        'X-Requested-With': '*',
        'Access-Control-Allow-Headers':
          'Content-Type,X-Amz-Date,Authorization,X-Api-Key,x-requested-with',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST,GET,OPTIONS',
      },
      body: indicators,
    };
    return response;
  }
}
