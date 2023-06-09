import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TariffListComponent } from './tariff-list.component';
import { mockTariffList } from '../mock';
import { SortType, sortOptions } from '../models';
import { TariffListService } from '../api';
import { By } from '@angular/platform-browser';

describe('TariffListComponent', () => {
  let component: TariffListComponent;
  let fixture: ComponentFixture<TariffListComponent>;
  let tariffListService: TariffListService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TariffListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TariffListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    tariffListService = TestBed.inject(TariffListService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render list of tariffs', () => {
    const tariffs = fixture.debugElement.queryAll(By.css('app-tariff'));

    expect(tariffs.length).toEqual(mockTariffList.length);
  });

  it('should have sorting options', () => {
    const options = fixture.debugElement.queryAll(
      By.css('.filters .select option')
    );

    expect(options.length).toEqual(sortOptions.size);
  });

  it('should request data with choosen sorting filter', () => {
    spyOn(tariffListService, 'getTariffList').and.callThrough();
    const select = fixture.debugElement.query(By.css('.filters .select'));

    select.nativeElement.selectedIndex = 1;
    select.nativeElement.dispatchEvent(new Event('change'));
    fixture.detectChanges();

    expect(tariffListService.getTariffList).toHaveBeenCalledWith(
      SortType.Download
    );
  });
});
