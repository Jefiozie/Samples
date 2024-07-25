import { DatePipe } from '@angular/common';
import { Component, model, signal, viewChild } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelect, MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'filter',
  standalone: true,
  imports: [DatePipe, MatSelectModule, MatFormFieldModule],
  template: `
    <fieldset>
      <mat-form-field>
      <mat-select placeholder="Please click a selection" (value)="id()">
        <mat-option> none </mat-option>
        <mat-option value="1"> 1 </mat-option>
      </mat-select>
      </mat-form-field>
    </fieldset>
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
  id = signal('');
  matSelect = viewChild.required(MatSelect);

  constructor() {
    // effect(() => {
    //   this.id.set(this.matSelect().value);
    // });
  }
}
