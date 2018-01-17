import { ChartMock } from '../models/charts/chart.mock';
import { StatsMock } from '../models/stats/stats.mock';
import { Observable } from 'rxjs/Observable';
import { Stats } from '../models/stats/stats';
import { Chart } from '../models/charts/chart';

export class BlockchainChartsServiceSpy {
  public getChart(id: string, timespan: string, rollingAverage: string): Observable<Chart> {
    const chartMock = ChartMock;
    return new Observable<Chart>(observe => observe.next(chartMock));
  }

  getStats(): Observable<Stats> {
    const stats = StatsMock;
    return new Observable<Stats>(observe => observe.next(stats));
  }
}
