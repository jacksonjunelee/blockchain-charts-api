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

  public selectedButton: number;

  public isSelected(number: number): string {
    return this.selectedButton && this.selectedButton !== number ? 'selected-button' : '';
  }

  public mouseOver(number: number): void {
    this.selectedButton = number;
    this.buttonMouseOver.emit(number);
  }
}
