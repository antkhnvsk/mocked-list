import { TestBed } from '@angular/core/testing';

import { TariffListService } from './tariff-list.service';

describe('TariffListService', () => {
  let service: TariffListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TariffListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
