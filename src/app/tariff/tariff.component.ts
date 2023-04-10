import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tariff',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tariff.component.html',
  styleUrls: ['./tariff.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TariffComponent {}
