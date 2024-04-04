import { Component } from '@angular/core';

import { RouterLink, RouterOutlet } from '@angular/router';
import { SentenceCasePipe } from './pipes/sentenceCase.pipes';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, SentenceCasePipe],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'standalone-app';
}
