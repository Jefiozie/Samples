import { JsonPipe } from '@angular/common';
import {
  Component,
  computed,
  inject,
  input
} from '@angular/core';
import { RouterLink, RouterOutlet, Routes } from '@angular/router';
import { FinanceService } from './finance.service';

@Component({
  imports: [RouterOutlet, RouterLink],
  standalone: true,
  template: ` <h1>this is a router outlet of multiple things</h1>
    <ul>
      @for(item of a(); track $index){
      <li>
        <a [routerLink]="['/multi-route/', item.accountNumber]">{{
          item.accountName
        }}</a>
      </li>
      }
    </ul>
    <router-outlet name="left" />
    <router-outlet name="right" />`,
})
class DefaultComponent {
  financeService = inject(FinanceService);
  a = this.financeService.getAll();
}
@Component({
  imports: [RouterOutlet, JsonPipe],
  standalone: true,
  template: ` <h2>A component - {{ id() }}</h2>
    <code>
      {{ $item() | json }}
    </code>`,
})
class AComponent {
  financeService = inject(FinanceService);
  id = input<string>('none');

  $item = computed(() => this.financeService.getById(this.id()));
}
@Component({
  imports: [RouterOutlet, JsonPipe],
  standalone: true,
  template: ` <h2>B component - {{ id() }}</h2>
    <code>
      {{ $item() | json }}
    </code>`,
})
class BComponent {
  financeService = inject(FinanceService);
  id = input<string>('none');

  $item = computed(() => this.financeService.getById(this.id()));
}
export const routes = [
  {
    path: ':id',
    loadComponent: () => DefaultComponent,
    children: [
      { path: '', loadComponent: () => AComponent, outlet: 'left' },
      { path: '', loadComponent: () => BComponent, outlet: 'right' },
    ],
  },
  {
    path: '',
    loadComponent: () => DefaultComponent,
  },
] as Routes;

export default routes;
