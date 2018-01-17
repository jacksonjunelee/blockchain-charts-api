import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'blockchain-block-details',
  templateUrl: './block-details.component.html'
})
export class BlockDetailsComponent {
  @Output() showChart: EventEmitter<string> = new EventEmitter<string>();

  public blockDetailsList: any = [
    {
      id: 'blocks-size',
      title: 'Blockchain Size',
      src: 'https://api.blockchain.info/charts/thumbnail/blocks-size.png',
      alt: 'The total size of all block headers and transactions.',
      text: 'The total size of all block headers and transactions.'
    },
    {
      id: 'avg-block-size',
      title: 'Average Block Size',
      src: 'https://api.blockchain.info/charts/thumbnail/avg-block-size.png',
      alt: 'The average block size in MB.',
      text: 'The average block size in MB.'
    },
    {
      id: 'n-orphaned-blocks',
      title: 'Orphaned Blocks',
      src: 'https://api.blockchain.info/charts/thumbnail/n-orphaned-blocks.png',
      alt: 'The total number of blocks mined but ultimately not attached to the main Bitcoin blockchain.',
      text: 'The total number of blocks mined but ultimately not attached to the main Bitcoin blockchain.'
    },
    {
      id: 'n-transactions-per-block',
      title: 'Transactions per Block',
      src: 'https://api.blockchain.info/charts/thumbnail/n-transactions-per-block.png',
      alt: 'The average number of transactions per block.',
      text: 'The average number of transactions per block.'
    },
    {
      id: 'median-confirmation-time',
      title: 'Median Transaction Confirmation Time (with fee)',
      src: 'https://api.blockchain.info/charts/thumbnail/median-confirmation-time.png',
      alt: 'The median time for a transaction to be accepted into a mined block.',
      text: 'The median time for a transaction to be accepted into a mined block.'
    },
    {
      id: 'bip-9-segwit',
      title: 'SegWit Adoption <br></br>',
      src: 'https://api.blockchain.info/charts/thumbnail/bip-9-segwit.png',
      alt: 'Percentage of blocks signalling SegWit support',
      text: '% of the last 2016 blocks that signal support for the activation of the SegWit soft-fork.'
    },
    {
      id: 'bitcoin-unlimited-share',
      title: 'Percentage of blocks signalling Bitcoin Unlimited support',
      src: 'https://api.blockchain.info/charts/thumbnail/bitcoin-unlimited-share.png',
      alt: 'Percentage of blocks signalling Bitcoin Unlimited support',
      text: 'Percentage of the last 200 blocks that signal support for Bitcoin Unlimited'
    },
    {
      id: 'nya-support',
      title: 'New York Agreement support <br></br>',
      src: 'https://api.blockchain.info/charts/thumbnail/nya-support.png',
      alt: 'Percentage of blocks signalling for the New York Agreement',
      text: 'Percentage of blocks signalling for the New York Agreement over the last 200 blocks'
    },
  ]

  public clickedChart(id: string) {
    this.showChart.emit(id);
  }
}
