import { Component, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { OnInit, OnChanges } from '@angular/core';

import { DatePipe } from '@angular/common';

@Component({
  selector: 'blockchain-chart',
  templateUrl: './chart.component.html'
})
export class ChartComponent implements OnChanges  {
  @Input() chartData;

  public data: number[] = [];
  public labels: number[] = [];

  constructor(private datePipe: DatePipe) {}

  public formatData(chartData): void {
    const data = [];
    const labels = [];

    chartData.values.forEach((datapoint) => {
      const unix_timestamp = datapoint['x'];
      const date = new Date(unix_timestamp * 1000);
      const dateFormat = this.datePipe.transform(date, 'MMM yy');

      data.push(datapoint['y']);
      labels.push(dateFormat);
    });

    console.log(data);
    console.log(labels);

    this.data = data;
    this.labels = labels;
  }


  ngOnChanges(changes: SimpleChanges) {
    if (changes['chartData'] && changes['chartData'].currentValue) {
      this.data = [];
      this.labels = [];
      this.formatData(changes['chartData'].currentValue);
    }
  }
}
