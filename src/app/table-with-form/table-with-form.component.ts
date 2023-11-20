import { CommonModule, JsonPipe, NgFor } from '@angular/common';
import { Component, Input, ViewChild } from '@angular/core';
import {
  ControlContainer,
  FormsModule,
  NgForm,
  NgModelGroup,
} from '@angular/forms';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <label for="text">Text box</label>
    <input name="text" [(ngModel)]="item.text" type="text" />
    <label for="first">Checkbox1</label>
    <input name="first" [(ngModel)]="item.first" type="checkbox" />
    <label for="second">Checkbox2</label>
    <input name="second" [(ngModel)]="item.second" type="checkbox" />
  `,
  styleUrl: './table-with-form.component.css',
  viewProviders: [{ provide: ControlContainer, useExisting: NgModelGroup }],
})
export class DetailsComponent {
  @Input() item!: { text: string; first: boolean; second: boolean };
}
@Component({
  selector: 'a',
  standalone: true,
  imports: [NgFor, DetailsComponent, FormsModule, JsonPipe],
  template: ` <form>
      <fieldset>
        <app-detail
          *ngFor="let item of items; let i = index"
          [item]="item"
          ngModelGroup="{{ 'array_' + i }}"
        />
      </fieldset>
    </form>
    <h3>form values of a form array with template</h3>
    <pre
      >{{ form?.form?.value | json }}
    </pre
    >`,
})
export default class TableWithFormComponent {
  @ViewChild(NgForm) form!: NgForm;
  items = [
    { text: 'hello', first: true, second: false },
    { text: 'second', first: false, second: true },
    { text: 'third', first: false, second: false },
  ];
}
