import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { HeaderComponent } from './header.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { DecimalPipe, CurrencyPipe } from '@angular/common';

describe('Header Component', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HeaderComponent
      ],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [ DecimalPipe, CurrencyPipe]
    }).compileComponents();
  }));

  it('should be defined', () => {
    const fixture = TestBed.createComponent(HeaderComponent);
    const comp = fixture.debugElement.componentInstance;
    expect(comp).toBeDefined();
  });

  it('should emit when buttons are mouseOver', () => {
    const fixture = TestBed.createComponent(HeaderComponent);
    const comp = fixture.debugElement.componentInstance;
    spyOn(comp.buttonMouseOver, 'emit');
    comp.mouseOver('market-price');
    expect(comp.buttonMouseOver.emit).toHaveBeenCalledWith('market-price');
  });

  it('should emit when buttons are clicked', () => {
    const fixture = TestBed.createComponent(HeaderComponent);
    const comp = fixture.debugElement.componentInstance;
    spyOn(comp.showChart, 'emit');
    comp.clickedChart('market-price');
    expect(comp.showChart.emit).toHaveBeenCalledWith('market-price');
  });
});
