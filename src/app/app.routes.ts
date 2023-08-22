import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'disabled-elements',
    loadComponent: () =>
      import('./disabled-elements/disabled-elements.component'),
  },
  {
    path: 'date',
    loadComponent: () => import('./date-config/date-config.component'),
  },
  {
    path: 'form',
    loadComponent: () => import('./form/form.component'),
  },
  {
    path: 'm-form',
    loadComponent: () => import('./form-material/form-material.component'),
  },
  { path: '', redirectTo: 'disabled-elements', pathMatch: 'full' },
];
