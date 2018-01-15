import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Stats } from '../models/stats/stats';

@Injectable()
export class BlockchainChartsService {
  private apiUrl = 'https://api.blockchain.info';

  constructor(private http: HttpClient) { }

  getChart(id: string, timespan='all') {
    const url = `${this.apiUrl}/charts/${id}?cors=true&timespan=${timespan}`;
    return this.http.get(url);
  }

  getStats(): Observable<Stats> {
    const url = `${this.apiUrl}/stats?cors=true`;
    return this.http.get(url);
  }

  getPools() { return; }
}
