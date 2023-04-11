import { TestBed } from '@angular/core/testing';

import { TariffListService } from './tariff-list.service';
import { SortType, Tariff } from '../models';
import { mockTariffList } from './tarif-list.mock';

describe('TariffListService', () => {
  let service: TariffListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TariffListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return mock data', () => {
    let data: Tariff[];

    service
      .getTarifList(SortType.Default)
      .subscribe((tarifs) => (data = tarifs));

    expect(data!).toEqual(mockTariffList);
  });
});
