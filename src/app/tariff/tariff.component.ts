import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';
import { Tariff } from '../models';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-tariff',
  standalone: true,
  imports: [CommonModule, DecimalPipe, NgFor],
  templateUrl: './tariff.component.html',
  styleUrls: ['./tariff.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TariffComponent {
  @Input() tariff!: Tariff;
}
