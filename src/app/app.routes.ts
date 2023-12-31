import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'disabled-elements',
    loadComponent: () =>
      import('./disabled-elements/disabled-elements.component'),
    title: 'TITEL',
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
  {
    path: 'dialog',
    loadComponent: () => import('./dialog-test/dialog-test.component'),
  },
  {
    path: 'tableWithForm',
    loadComponent: () => import('./table-with-form/table-with-form.component'),
  },
  {
    path: 'routeInput/:id/:phone',
    loadComponent: () => import('./router-input/router-input.component'),
  },
  { path: '', redirectTo: 'disabled-elements', pathMatch: 'full' },
];
