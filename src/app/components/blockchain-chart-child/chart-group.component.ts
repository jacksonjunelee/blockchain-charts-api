import { Component, Input, Output, EventEmitter } from '@angular/core';
import { OnInit, OnChanges } from '@angular/core';

import * as chartHelpers from '../helpers';

@Component({
  selector: 'blockchain-chart-group',
  templateUrl: './chart-group.component.html'
})
export class ChartGroupComponent {
  @Input() displayChart: string;

  public chartHelpers: any = chartHelpers;
}
