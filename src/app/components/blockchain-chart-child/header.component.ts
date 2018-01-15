import { Component, Input, Output, EventEmitter } from '@angular/core';
import { OnInit, OnChanges } from '@angular/core';
import { Stats } from '../../models/stats/stats';

@Component({
  selector: 'blockchain-chart-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  @Input() stats: Stats;
  @Output() buttonMouseOver: EventEmitter<number> = new EventEmitter<number>();

  public mouseOver(number: number) {
    this.buttonMouseOver.emit(number);
  }
}
