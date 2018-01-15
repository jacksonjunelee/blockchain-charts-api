import { Component } from '@angular/core';
import { BlockchainChartsService } from '../services/blockchain-charts.service';
import { OnInit } from '@angular/core';
import { Stats } from '../models/stats/stats';

import * as chartHelpers from './helpers';

@Component({
  selector: 'blockchain-chart-container',
  templateUrl: './blockchain-chart.container.component.html'
})
export class BlockchainChartsContainerComponent {
  public stats: Stats;
  public displayChart: string;
  public chartData;
  public showChartModal: boolean;

  constructor(private blockchainChartsService: BlockchainChartsService) {
    this.blockchainChartsService.getStats().subscribe((stats) => {
      this.stats = stats;
    });
  }

  public toggleChartModal(): void {
    this.showChartModal = !this.showChartModal;
  }

  showCharts(event: string) {
    this.displayChart = event;
  }

  getChart(event: string, timespan = 'all', rollingAverage = '1months') {
    this.blockchainChartsService.getChart(event, timespan, rollingAverage).subscribe((chartData) => {
      this.chartData = chartData;
    });
    this.showChartModal = true;
  }
}
