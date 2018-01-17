import { BlockchainChartsService } from './blockchain-charts.service';
import { TestBed, async, inject } from '@angular/core/testing';
import {
  HttpModule,
  Http,
  Response,
  ResponseOptions,
  XHRBackend
} from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { StatsMock } from '../models/stats/stats.mock';
import { ChartMock } from '../models/charts/chart.mock';

describe('Service: BlockchainChartsService', () => {

  beforeEach(() => {
   TestBed.configureTestingModule({
     imports: [
       HttpModule
     ],
     providers: [
       BlockchainChartsService,
       { provide: XHRBackend, useClass: MockBackend },
     ]
   });
  });

  it('should get charts', () => {
    inject([BlockchainChartsService, XHRBackend], (BlockchainChartsService, mockBackend) => {
      const mockResponse = ChartMock;
      mockBackend.connections.subscribe((connection) => {
        connection.mockRespond(new Response(new ResponseOptions({
          body: JSON.stringify(mockResponse)
        })));
      });
      BlockchainChartsService.getChart('market-price', 'all', '1months').subscribe((chart) => {
        expect(chart).toBe(mockResponse);
      });
    });
  });

  it('should get stats', () => {
    inject([BlockchainChartsService, XHRBackend], (BlockchainChartsService, mockBackend) => {
      const mockResponse = StatsMock;
      mockBackend.connections.subscribe((connection) => {
        connection.mockRespond(new Response(new ResponseOptions({
          body: JSON.stringify(mockResponse)
        })));
      });
      BlockchainChartsService.getStats().subscribe((stats) => {
        expect(stats).toBe(mockResponse);
      });
    });
  });
});
