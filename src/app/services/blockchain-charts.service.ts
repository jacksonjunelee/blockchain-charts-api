import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Stats } from '../models/stats/stats';
import { Chart } from '../models/charts/chart';

@Injectable()
export class BlockchainChartsService {
  private apiUrl = 'https://api.blockchain.info';

  constructor(private http: HttpClient) { }

  getChart(id: string, timespan: string, rollingAverage: string): Observable<Chart> {
    const url = `${this.apiUrl}/charts/${id}?cors=true&timespan=${timespan}&rollingAverage=${rollingAverage}`;
    return this.http.get(url);
  }

  getStats(): Observable<Stats> {
    const url = `${this.apiUrl}/stats?cors=true`;
    return this.http.get(url);
  }
}
