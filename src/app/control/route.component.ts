import { JsonPipe } from '@angular/common';
import { Component, viewChild, AfterViewInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { InputComponent } from './input-control.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormFieldComponent } from './form-field-control.component';

@Component({
    imports: [
        InputComponent,
        FormsModule,
        JsonPipe,
        MatFormFieldModule,
        FormFieldComponent,
    ],
    template: `
    <h1>plain</h1>
    <form>
      <app-input name="control" [(ngModel)]="control" />
    </form>
    <code> {{ form()!.value | json }} </code>

    <h1>form field</h1>
    <mat-form-field>
      <app-form-input name="control" [(ngModel)]="control" />
    </mat-form-field>
  `
})
export default class RouteComponent implements AfterViewInit {
  control = 'waarde';
  form = viewChild(NgForm);

  constructor() {}
  ngAfterViewInit() {
    this.form()?.valueChanges?.subscribe(console.error);
  }
}
