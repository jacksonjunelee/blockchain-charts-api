import { Component, Input } from '@angular/core';
import { OnInit, OnChanges } from '@angular/core';
import { Stats } from '../../models/stats/stats';

@Component({
  selector: 'blockchain-chart-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  @Input() stats: Stats;

  // ngOnInit() {
  //   console.log(this.stats)
  // }
  //
  // ngOnChanges(changes: SimpleChanges) {
  //   console.log(changes);
  //   console.log(this.stats)
  //   // changes.prop contains the old and the new value...
  // }
}
