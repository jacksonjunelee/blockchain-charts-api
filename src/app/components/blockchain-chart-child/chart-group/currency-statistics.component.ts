import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'blockchain-currency-statistics',
  templateUrl: './currency-statistics.component.html'
})
export class CurrencyStatisticsComponent {
  @Output() showChart: EventEmitter<string> = new EventEmitter<string>();

  public currencyStatisticsList: any = [
    {
      id: 'total-bitcoins',
      title: 'Bitcoins in circulation',
      src: 'https://api.blockchain.info/charts/thumbnail/total-bitcoins.png',
      alt: 'Average USD market price across major bitcoin exchanges.',
      text: 'The total number of bitcoins that have already been mined.'
    },
    {
      id: 'market-price',
      title: 'Market Price (USD)',
      src: 'https://api.blockchain.info/charts/thumbnail/market-price.png" alt="The total number of bitcoins that have already been mined.',
      alt: 'The total number of bitcoins that have already been mined.',
      text: 'Average USD market price across major bitcoin exchanges.'
    },
    {
      id: 'market-cap',
      title: 'Market Capitalization',
      src: 'https://api.blockchain.info/charts/thumbnail/market-cap.png',
      alt: 'The total USD value of bitcoin supply in circulation.',
      text: 'The total USD value of bitcoin supply in circulation.'
    },
    {
      id: 'trade-volume',
      title: 'USD Exchange Trade Volume',
      src: 'https://api.blockchain.info/charts/thumbnail/trade-volume.png',
      alt: 'The total USD value of trading volume on major bitcoin exchanges.',
      text: 'The total USD value of trading volume on major bitcoin exchanges.'
    },
  ]

  public clickedChart(id: string) {
    this.showChart.emit(id);
  }
}
