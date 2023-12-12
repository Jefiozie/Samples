import { Component, Input as RouterInput } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-router-input',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './router-input.component.html',
  styleUrl: './router-input.component.css',
})
export default class RouterInputComponent {
  @RouterInput() id!: string;
  @RouterInput() phone!: string;
}
