import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./multi-child.component').then((a) => a.MultiChildComponent),
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./left.component').then((e) => e.LeftItemComponent),
      },
      {
        path: '',
        outlet: 'right',
        loadComponent: () =>
          import('./right.component').then((e) => e.RightItemComponent),
      },
    ],
  },
];
