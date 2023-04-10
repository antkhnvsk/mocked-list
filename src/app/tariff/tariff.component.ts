import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tariff } from '../models';

@Component({
  selector: 'app-tariff',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tariff.component.html',
  styleUrls: ['./tariff.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TariffComponent {
  @Input() tariff!: Tariff;
}
