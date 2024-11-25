import { Component, inject } from '@angular/core';
import { MultiChildService } from './multi-child.service';

@Component({
  template: `<h1>right</h1>
  <ul>
      @for (item of items(); track $index) {
      <li>
        <span>{{ item.text }}</span>
      </li>
      }
    </ul> 
    `,
})
export class RightItemComponent {
  protected readonly service = inject(MultiChildService);
  items = this.service.items;
}
