import { Component, input } from '@angular/core';


@Component({
    selector: 'app-router-input',
    imports: [],
    templateUrl: './router-input.component.html',
    styleUrl: './router-input.component.css'
})
export default class RouterInputComponent {
  readonly id = input.required<string>();
  readonly phone = input.required<string>();
}
