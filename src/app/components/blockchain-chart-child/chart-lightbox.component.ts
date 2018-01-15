import { Component, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'blockchain-chart-lightbox',
  templateUrl: './chart-lightbox.component.html'
})
export class ChartLightboxComponent implements OnChanges  {
  @Input() chartData;

  ngOnChanges(changes: SimpleChanges) {
    if (changes['chartData']) {
      console.log(changes);
    }
  }

}
