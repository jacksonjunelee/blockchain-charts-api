import { Component, Input, Output, EventEmitter } from '@angular/core';
import { OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'blockchain-chart-group',
  templateUrl: './chart-group.component.html'
})
export class ChartGroupComponent {
  @Input() displayChartNumber: number;
}
