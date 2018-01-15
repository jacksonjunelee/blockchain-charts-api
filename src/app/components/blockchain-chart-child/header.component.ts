import { Component, Input, Output, EventEmitter } from '@angular/core';
import { OnInit, OnChanges } from '@angular/core';
import { Stats } from '../../models/stats/stats';

import * as chartHelpers from '../helpers';

@Component({
  selector: 'blockchain-chart-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  @Input() stats: Stats;
  @Output() buttonMouseOver: EventEmitter<string> = new EventEmitter<string>();

  public buttonLists: any = [
    {chart: chartHelpers.CurrencyStatistics, text: chartHelpers.CurrencyStatisticsText},
    {chart: chartHelpers.BlockDetails, text: chartHelpers.BlockDetailsText},
    {chart: chartHelpers.MiningInformation, text: chartHelpers.MiningInformationText},
    {chart: chartHelpers.NetworkActivity, text: chartHelpers.NetworkActivityText},
    {chart: chartHelpers.BlockchainWalletActivity, text: chartHelpers.BlockchainWalletActivityText},
  ]
  public selectedButton: string;

  public isSelected(chart: string): string {
    return this.selectedButton && this.selectedButton !== chart ? 'selected-button' : '';
  }

  public mouseOver(chart: string): void {
    this.selectedButton = chart;
    this.buttonMouseOver.emit(chart);
  }
}
