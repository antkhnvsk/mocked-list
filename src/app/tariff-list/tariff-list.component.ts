import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tariff-list.component.html',
  styleUrls: ['./tariff-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TariffListComponent {

}
