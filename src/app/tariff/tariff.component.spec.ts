import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TariffComponent } from './tariff.component';
import { mockTariffList } from '../mock';
import { LOCALE_ID } from '@angular/core';
import { formatNumber } from '@angular/common';
import { By } from '@angular/platform-browser';

const mockTariff = mockTariffList[0];

describe('TariffComponent', () => {
  let component: TariffComponent;
  let fixture: ComponentFixture<TariffComponent>;
  let locale: string;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TariffComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TariffComponent);
    fixture.componentRef.setInput('tariff', mockTariff);
    component = fixture.componentInstance;
    fixture.detectChanges();
    locale = TestBed.inject(LOCALE_ID);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render tariff name', () => {
    const name = fixture.debugElement.query(By.css('.col.-name'));

    expect(name.nativeElement.textContent).toContain(mockTariff.name);
  });

  it('should render tariff download speed', () => {
    const speed = fixture.debugElement.query(
      By.css('.col.-speed .-download .speed-data')
    );

    expect(speed.nativeElement.textContent).toContain(
      formatNumber(mockTariff.speedDownload, locale, '1.0-0')
    );
  });

  it('should render tariff price', () => {
    const price = fixture.debugElement.query(By.css('.col.-price .price-tag'));

    expect(price.nativeElement.textContent).toContain(
      formatNumber(mockTariff.price, locale, '1.0-2')
    );
  });
});
