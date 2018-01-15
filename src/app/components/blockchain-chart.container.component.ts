import { Component } from '@angular/core';
import { BlockchainChartsService } from '../services/blockchain-charts.service';
import { OnInit } from '@angular/core';
import { Stats } from '../models/stats/stats';

@Component({
  selector: 'blockchain-chart-container',
  templateUrl: './blockchain-chart.container.component.html'
})
export class BlockchainChartsContainerComponent {
  public stats: Stats;
  public displayChart: string;

  constructor(private blockchainChartsService: BlockchainChartsService) {
    this.blockchainChartsService.getStats().subscribe((stats) => {
      this.stats = stats;
    });
  }

  showCharts(event) {
    this.displayChart = event;
  }
}
