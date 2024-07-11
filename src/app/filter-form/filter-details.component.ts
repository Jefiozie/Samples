import { DatePipe, JsonPipe } from '@angular/common';
import { Component, computed, inject, input } from '@angular/core';
import { DataService } from '../shared/data.service';

@Component({
  selector: 'detail',
  standalone: true,
  imports: [DatePipe, JsonPipe],
  template: `
    <details>
      <fieldset>
        <label for="userName">ID</label>
        <input
          type="text"
          id="userName"
          name="userName"
          [value]="user()?.userId"
          disabled
        />
      </fieldset>
      <fieldset>
        <label for="userName">Username</label>
        <input
          type="text"
          id="userName"
          name="userName"
          [value]="user()?.username"
          disabled
        />
      </fieldset>
      <fieldset>
        <label for="userName">BirthDate</label>
        <input
          type="text"
          id="userName"
          name="userName"
          [value]="user()?.birthdate | date : 'yyyy-MM-dd'"
          disabled
        />
      </fieldset>
    </details>
  `,
})
export default class DetailComponent {
  service = inject(DataService);
  userId = input.required<string>();

  user = computed(() => this.service.getById(this.userId()) ?? '');
}
