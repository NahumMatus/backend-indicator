import { ForbiddenException, Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { map, catchError, firstValueFrom } from 'rxjs';
import { AxiosError } from 'axios';
import { Indicators } from './interfaces/indicators.interface';

@Injectable()
export class IndicatorService {
  constructor(private http: HttpService) {}

  async getIndicators(): Promise<Indicators> {
    const { data } = await firstValueFrom(
      this.http.get<Indicators>('https://mindicador.cl/api').pipe(
        catchError((error: AxiosError) => {
          throw 'An error happened!';
        }),
      ),
    );
    return data;
  }
}
