import { BlockchainChartsContainerComponent } from './blockchain-chart.container.component';
import { HeaderComponent } from './blockchain-chart-child/header.component';
import { ChartGroupComponent } from './blockchain-chart-child/chart-group.component';
import { ChartComponent } from './blockchain-chart-child/chart.component';
import { CurrencyStatisticsComponent } from './blockchain-chart-child/chart-group/currency-statistics.component';
import { BlockDetailsComponent } from './blockchain-chart-child/chart-group/block-details.component';
import { WalletActivityComponent } from './blockchain-chart-child/chart-group/blockchain-wallet-activity.component';
import { MiningInformationComponent } from './blockchain-chart-child/chart-group/mining-information.component';
import { NetworkActivityComponent } from './blockchain-chart-child/chart-group/network-activity.component';

export const blockChainChartsComponents = [
  BlockchainChartsContainerComponent,
  HeaderComponent,
  ChartGroupComponent,
  ChartComponent,
  CurrencyStatisticsComponent,
  BlockDetailsComponent,
  WalletActivityComponent,
  NetworkActivityComponent,
  MiningInformationComponent
]
