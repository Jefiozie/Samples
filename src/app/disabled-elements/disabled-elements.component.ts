
import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { AUTHORIZE_ONLY_DIRECTIVES } from './authorize/authorize-only.directive';
import { CONFETTI_STANDALONE, provideConfetti } from '../utils/providerExample';
@Component({
    selector: 'app-disabled-elements',
    imports: [MatButtonModule, MatNativeDateModule, MatDatepickerModule, AUTHORIZE_ONLY_DIRECTIVES],
    templateUrl: './disabled-elements.component.html',
    styleUrls: ['./disabled-elements.component.css']
})
export default class DisabledElementsComponent {
  disabled = true;
  // wx = inject(CONFETTI_STANDALONE);

  roles = ['not-admin'];
}
