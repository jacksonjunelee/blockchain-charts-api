import { Component, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'blockchain-chart-lightbox',
  templateUrl: './chart-lightbox.component.html'
})
export class ChartLightboxComponent implements OnChanges  {
  @Input() chartData;

  public data: number[];
  public labels: number[];

  public formatData(chartData): void {
    const data = [];
    const labels = [];

    chartData.values.forEach((datapoint) => {
      data.push(datapoint['y']);
      labels.push(datapoint['x']);
    });

    this.data = data;
    this.labels = labels;
  }


  ngOnChanges(changes: SimpleChanges) {
    if (changes['chartData'] && changes['chartData'].currentValue) {
      this.formatData(changes['chartData'].currentValue);
    }
  }

}
