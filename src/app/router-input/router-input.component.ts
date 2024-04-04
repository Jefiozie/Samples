import { Component, Input as RouterInput } from '@angular/core';


@Component({
  selector: 'app-router-input',
  standalone: true,
  imports: [],
  templateUrl: './router-input.component.html',
  styleUrl: './router-input.component.css',
})
export default class RouterInputComponent {
  @RouterInput() id!: string;
  @RouterInput() phone!: string;
}
