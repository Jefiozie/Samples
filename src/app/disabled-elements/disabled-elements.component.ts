import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { AUTHORIZE_ONLY_DIRECTIVES } from './authorize/authorize-only.directive';
@Component({
  selector: 'app-disabled-elements',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatNativeDateModule, MatDatepickerModule, AUTHORIZE_ONLY_DIRECTIVES],
  templateUrl: './disabled-elements.component.html',
  styleUrls: ['./disabled-elements.component.css'],
})
export default class DisabledElementsComponent {
  disabled = true;
  roles = ['not-admin'];
}
