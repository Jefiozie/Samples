import { DatePipe } from '@angular/common';
import { Component, computed, inject, input, model } from '@angular/core';
import { DataService } from '../shared/data.service';

@Component({
  selector: 'detail',
  standalone: true,
  imports: [DatePipe],
  template: `
    <fieldset>
      <label for="userName">Username</label>
      <input type="text" id="userName" name="userName" [value]="userName()" />
    </fieldset>
  `,
})
export default class DetailComponent {
  service = inject(DataService);
  userId = input.required<string>();

  userName = computed(
    () => this.service.getById(this.userId())?.username ?? ''
  );
}
