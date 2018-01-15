import { Component } from '@angular/core';

@Component({
  selector: 'blockchain-block-details',
  templateUrl: './block-details.component.html'
})
export class BlockDetailsComponent {
  public blockDetailsList: any = [
    {
      title: 'Blockchain Size',
      src: 'https://api.blockchain.info/charts/thumbnail/blocks-size.png',
      alt: 'The total size of all block headers and transactions.',
      text: 'The total size of all block headers and transactions.'
    },
    {
      title: 'Average Block Size',
      src: 'https://api.blockchain.info/charts/thumbnail/avg-block-size.png',
      alt: 'The average block size in MB.',
      text: 'The average block size in MB.'
    },
    {
      title: 'Orphaned Blocks',
      src: 'https://api.blockchain.info/charts/thumbnail/n-orphaned-blocks.png',
      alt: 'The total number of blocks mined but ultimately not attached to the main Bitcoin blockchain.',
      text: 'The total number of blocks mined but ultimately not attached to the main Bitcoin blockchain.'
    },
    {
      title: 'Transactions per Block',
      src: 'https://api.blockchain.info/charts/thumbnail/n-transactions-per-block.png',
      alt: 'The average number of transactions per block.',
      text: 'The average number of transactions per block.'
    },
    {
      title: 'Median Transaction Confirmation Time (with fee)',
      src: 'https://api.blockchain.info/charts/thumbnail/median-confirmation-time.png',
      alt: 'The median time for a transaction to be accepted into a mined block.',
      text: 'The median time for a transaction to be accepted into a mined block.'
    },
    {
      title: 'SegWit Adoption <br></br>',
      src: 'https://api.blockchain.info/charts/thumbnail/bip-9-segwit.png',
      alt: 'Percentage of blocks signalling SegWit support',
      text: '% of the last 2016 blocks that signal support for the activation of the SegWit soft-fork.'
    },
    {
      title: 'Percentage of blocks signalling Bitcoin Unlimited support',
      src: 'https://api.blockchain.info/charts/thumbnail/bitcoin-unlimited-share.png',
      alt: 'Percentage of blocks signalling Bitcoin Unlimited support',
      text: 'Percentage of the last 200 blocks that signal support for Bitcoin Unlimited'
    },
    {
      title: 'New York Agreement support <br></br>',
      src: 'https://api.blockchain.info/charts/thumbnail/nya-support.png',
      alt: 'Percentage of blocks signalling for the New York Agreement',
      text: 'Percentage of blocks signalling for the New York Agreement over the last 200 blocks'
    },
  ]
}
