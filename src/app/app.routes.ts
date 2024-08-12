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
  {
    path: 'table',
    loadComponent: () => import('./table/table.component'),
  },
  {
    path: 'table-dynamic',
    loadComponent: () => import('./table-dynamic/table-dynamic.component'),
  },
  {
    path: 'control',
    loadComponent: () => import('./control/route.component'),
  },
  {
    path: 'mat-table',
    loadComponent: () => import('./mat-table/mat-table.component'),
  },
  {
    path: 'multi-route',
    loadChildren: () => import('./routeOutlet/default.component'),
  },
  {
    path: 'tabss',
    loadComponent: () =>
      import('./multi-tabs-windows/multi-tabs-windows.component'),
  },
  {
    path: 'invoice',
    loadComponent: () => import('./multi-tabs-windows/invoice.component'),
  },
  {
    path: 'react',
    loadComponent: () => import('./react/posts.component'),
  },
  {
    path: 'filter',
    loadComponent: () => import('./filter-form/filter-form.component'),
  },
  {
    path: 'data-selection',
    loadComponent: () => import('./data-selection/data-selection.component'),
  },
  {
    path: 'popover-example',
    loadComponent: () => import('./popover-example/popover-example.component'),
  },
  { path: '', redirectTo: 'disabled-elements', pathMatch: 'full' },
];
