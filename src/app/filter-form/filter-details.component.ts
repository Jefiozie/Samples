import { DatePipe, JsonPipe } from '@angular/common';
import { Component, computed, inject, input } from '@angular/core';
import { DataService } from '../shared/data.service';

@Component({
  selector: 'detail',
  standalone: true,
  imports: [DatePipe, JsonPipe],
  template: `
      @let users = user();
    <details>
      <fieldset>
        <label for="userName">ID</label>
        <input
          type="text"
          id="userName"
          name="userName"
          [value]="users.userId"
          disabled
        />
      </fieldset>
      <fieldset>
        <label for="userName">Username</label>
        <input
          type="text"
          id="userName"
          name="userName"
          [value]="users.username"
          disabled
        />
      </fieldset>
      <fieldset>
        <label for="userName">BirthDate</label>
        <input
          type="text"
          id="userName"
          name="userName"
          [value]="users.birthdate | date : 'yyyy-MM-dd'"
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
