import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { ChartComponent } from './chart.component';
import { NO_ERRORS_SCHEMA, SimpleChange } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ChartMock } from '../../models/charts/chart.mock';

describe('Chart Component', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ChartComponent
      ],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [ DatePipe ]
    }).compileComponents();
  }));

  it('should be defined', () => {
    const fixture = TestBed.createComponent(ChartComponent);
    const comp = fixture.debugElement.componentInstance;
    expect(comp).toBeDefined();
  });

  it('should format data to data and labels', () => {
    const fixture = TestBed.createComponent(ChartComponent);
    const comp = fixture.debugElement.componentInstance;
    comp.ngOnChanges({
      chartData: new SimpleChange(null, ChartMock, false)
    });
    fixture.detectChanges();
    expect(comp.data.length).toBeGreaterThan(1);
  })
});
