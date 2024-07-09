import { DatePipe } from '@angular/common';
import { Component, model } from '@angular/core';

@Component({
  selector: 'filter',
  standalone: true,
  imports: [DatePipe],
  template: `
    <fieldset>
      <legend>Fill in a name of a user</legend>
      <input
        type="text"
        id="userName"
        name="userName"
        [value]="userName()"
        (input)="userName.set($any($event.target).value)"
      />
    </fieldset>
    <fieldset>
      <legend>Fill in a birthdate to search</legend>
      <input
        type="date"
        id="birthDate"
        name="birthDate"
        [value]="birthDate() | date : 'yyyy-MM-dd'"
        (input)="birthDate.set($any($event.target).valueAsDate)"
      />
    </fieldset>
  `,
})
export default class FilterComponent {
  birthDate = model.required<Date | undefined>();
  userName = model.required<string>();
}
