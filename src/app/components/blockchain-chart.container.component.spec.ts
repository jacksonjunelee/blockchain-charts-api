import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { BlockchainChartsContainerComponent } from './blockchain-chart.container.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { BlockchainChartsService } from '../services/blockchain-charts.service';
import { BlockchainChartsServiceSpy } from '../services/blockchain-charts-spy.service';
import { StatsMock } from '../models/stats/stats.mock';
import { ChartMock } from '../models/charts/chart.mock';

describe('Blockchain Chart Container', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        BlockchainChartsContainerComponent
      ],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        { provide: BlockchainChartsService, useClass: BlockchainChartsServiceSpy }
      ]
    }).compileComponents();
  }));

  // beforeEach(() => {
  //   fixture = TestBed.createComponent(BlockchainChartsContainerComponent);
  //   comp = fixture.debugElement.componentInstance;
  //
  //
  //   // fixture.detectChanges();
  // });

    // afterEach(() => { fixture.destroy() });


  it('should be defined', () => {
    const fixture = TestBed.createComponent(BlockchainChartsContainerComponent);
    const comp = fixture.debugElement.componentInstance;
    expect(comp).toBeDefined();
  });

  it('should make a service call on init to get stats', () => {
    const fixture = TestBed.createComponent(BlockchainChartsContainerComponent);
    const comp = fixture.debugElement.componentInstance;
    const statsMock = StatsMock;
    expect(comp.stats.market_price_usd).toBe(statsMock.market_price_usd);
  })
});
