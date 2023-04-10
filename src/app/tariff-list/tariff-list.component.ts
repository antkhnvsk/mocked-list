import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TariffComponent } from '../tariff/tariff.component';

@Component({
  standalone: true,
  imports: [TariffComponent],
  templateUrl: './tariff-list.component.html',
  styleUrls: ['./tariff-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TariffListComponent {}
