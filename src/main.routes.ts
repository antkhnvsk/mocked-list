import { Routes } from '@angular/router';

export default [
  {
    path: 'tarifs',
    loadComponent: () =>
      import('./app/tariff-list').then((c) => c.TariffListComponent),
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'tarifs',
  },
] as Routes;
