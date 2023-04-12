import { Routes } from '@angular/router';

export default [
  {
    path: 'tariffs',
    loadComponent: () =>
      import('./app/tariff-list').then((c) => c.TariffListComponent),
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'tariffs',
  },
] as Routes;
