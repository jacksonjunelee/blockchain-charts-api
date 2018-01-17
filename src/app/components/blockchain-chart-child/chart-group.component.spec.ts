import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { ChartGroupComponent } from './chart-group.component';
import { NO_ERRORS_SCHEMA, SimpleChange } from '@angular/core';

describe('Chart Group Component', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ChartGroupComponent
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  it('should be defined', () => {
    const fixture = TestBed.createComponent(ChartGroupComponent);
    const comp = fixture.debugElement.componentInstance;
    expect(comp).toBeDefined();
  });

  it('should emit when charts are clicked', () => {
    const fixture = TestBed.createComponent(ChartGroupComponent;
    const comp = fixture.debugElement.componentInstance;
    spyOn(comp.showChart, 'emit');
    comp.clickedChart('market-price');
    expect(comp.showChart.emit).toHaveBeenCalledWith('market-price');
  });
});
