import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Stats } from '../models/stats/stats';

@Injectable()
export class BlockchainChartsService {
  private apiUrl = 'https://api.blockchain.info';

  constructor(private http: HttpClient) { }

  getCharts() {
    return;
  }

  getStats(): Observable<Stats> {
    const url = `${this.apiUrl}/stats`;
    return this.http.get(url);
  }

  getPools() { return; }
}
