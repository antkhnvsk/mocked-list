import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TariffComponent } from './tariff.component';
import { mockTariffList } from '../api/tarif-list.mock';
import { LOCALE_ID } from '@angular/core';
import { formatNumber } from '@angular/common';

const mockTarif = mockTariffList[0];

describe('TariffComponent', () => {
  let component: TariffComponent;
  let fixture: ComponentFixture<TariffComponent>;
  let locale: string;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TariffComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TariffComponent);
    fixture.componentRef.setInput('tariff', mockTarif);
    component = fixture.componentInstance;
    fixture.detectChanges();
    locale = TestBed.inject(LOCALE_ID);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render tarif name', () => {
    const name = fixture.nativeElement.querySelector('.col.-name');

    expect(name.textContent).toContain(mockTarif.name);
  });

  it('should render tarif download speed', () => {
    const speed = fixture.nativeElement.querySelector(
      '.col.-speed .-download .speed-data'
    );

    expect(speed.textContent).toContain(
      formatNumber(mockTarif.speedDownload, locale, '1.0-0')
    );
  });

  it('should render tarif price', () => {
    const price = fixture.nativeElement.querySelector('.col.-price .price-tag');

    expect(price.textContent).toContain(
      formatNumber(mockTarif.price, locale, '1.0-2')
    );
  });
});
