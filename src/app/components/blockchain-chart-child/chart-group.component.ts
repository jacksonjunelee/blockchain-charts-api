import { Component, Input, Output, EventEmitter } from '@angular/core';
import { OnInit, OnChanges } from '@angular/core';

import * as chartHelpers from '../helpers';

@Component({
  selector: 'blockchain-chart-group',
  templateUrl: './chart-group.component.html'
})
export class ChartGroupComponent {
  @Input() displayChart: string;
  @Output() showChart: EventEmitter<string> = new EventEmitter<string>();

  public chartHelpers: any = chartHelpers;

  public clickedChart(event: string): void {
    this.showChart.emit(event);
  }
}
