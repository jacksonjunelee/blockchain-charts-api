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

  it('should be defined', () => {
    const fixture = TestBed.createComponent(BlockchainChartsContainerComponent);
    const comp = fixture.debugElement.componentInstance;
    expect(comp).toBeDefined();
  });

  it('should make a service call on init to get stats', () => {
    const fixture = TestBed.createComponent(BlockchainChartsContainerComponent);
    const comp = fixture.debugElement.componentInstance;
    const statsMock = StatsMock;
    expect(comp.stats).toBe(statsMock);
  });

  it('should get chart data and show chart modal', () => {
    const fixture = TestBed.createComponent(BlockchainChartsContainerComponent);
    const comp = fixture.debugElement.componentInstance;
    const chartMock = ChartMock;
    const id = 'market-price';
    comp.getChart(id);
    expect(comp.chartData).toBe(chartMock);
    expect(comp.showChartModal).toBeTruthy;
    expect(comp.selectedChart).toBe(id);
  });

  it('should close chart modal and reset data', () => {
    const fixture = TestBed.createComponent(BlockchainChartsContainerComponent);
    const comp = fixture.debugElement.componentInstance;
    const chartMock = ChartMock;
    const id = 'market-price';
    comp.getChart(id);
    comp.closeChartModal();
    expect(comp.chartData).toBeFalsy;
    expect(comp.showChartModal).toBeFalsy;
    expect(comp.selectedChart).toBeFalsy;
  })
});
