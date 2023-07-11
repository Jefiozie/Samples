import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { AuthorizeOnlyDirective } from './authorize/authorize-only.directive';
@Component({
  selector: 'app-disabled-elements',
  standalone: true,
  imports: [CommonModule, MatButtonModule, AuthorizeOnlyDirective],
  templateUrl: './disabled-elements.component.html',
  styleUrls: ['./disabled-elements.component.css'],
})
export default class DisabledElementsComponent {
  disabled = true;
  roles = ['not-admin'];
}
