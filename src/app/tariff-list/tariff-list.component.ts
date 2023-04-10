import { AsyncPipe, KeyValuePipe, NgFor } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { TariffListService } from '../api';
import { TariffComponent } from '../tariff/tariff.component';
import { Observable, startWith, switchMap } from 'rxjs';
import { SortType, Tariff, sortOptions } from '../models';

@Component({
  standalone: true,
  imports: [
    TariffComponent,
    NgFor,
    AsyncPipe,
    KeyValuePipe,
    ReactiveFormsModule,
  ],
  templateUrl: './tariff-list.component.html',
  styleUrls: ['./tariff-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TariffListComponent {
  tariffList$!: Observable<Tariff[]>;

  sortingFC = new FormControl<SortType>(SortType.Default, {
    nonNullable: true,
  });
  sortOptions = sortOptions;

  constructor(private tariffListService: TariffListService) {}

  ngOnInit() {
    this.tariffList$ = this.sortingFC.valueChanges.pipe(
      startWith(this.sortingFC.value),
      switchMap((sorting) => this.tariffListService.getTarifList(sorting))
    );
  }
}
