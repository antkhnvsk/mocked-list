import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TariffComponent } from '../tariff/tariff.component';
import { TariffListService } from '../api';
import { AsyncPipe, NgFor } from '@angular/common';

@Component({
  standalone: true,
  imports: [TariffComponent, NgFor, AsyncPipe],
  templateUrl: './tariff-list.component.html',
  styleUrls: ['./tariff-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TariffListComponent {
  tariffList$ = this.tariffListService.getTarifList();

  constructor(private tariffListService: TariffListService) {}
}
