import { Component, inject } from '@angular/core';
import { MultiChildService } from './multi-child.service';

@Component({
  template: `<h1>A list with items</h1>
    <ul>
      @for (item of list(); track $index) {
      <li>
        <span>{{ item.text }}</span
        ><button (click)="service.add(item.id, item.text)">add</button
        ><button (click)="service.delete(item.id)">delete</button>
      </li>
      }
    </ul> `,
})
export class LeftItemComponent {
  protected readonly service = inject(MultiChildService);
  list = this.service.list;
}
