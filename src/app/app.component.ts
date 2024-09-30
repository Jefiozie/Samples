import { Component, inject } from '@angular/core';

import { RouterLink, RouterOutlet } from '@angular/router';
import { routes } from './app.routes';
import { SentenceCasePipe } from './pipes/sentenceCase.pipes';
import { RenderComponentService } from './render-component.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, SentenceCasePipe],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'standalone-app';
  routes = routes;
  rendercmpS = inject(RenderComponentService);

  async lazyRenderCmpClick() {
    const element = document.querySelector<HTMLElement>('#renderCmp')!;
    const lazy = () => import('./popover-example/popover-example.component');
    const { default: cmp } = await lazy();
    this.rendercmpS.renderComponent(cmp, element);
  }
}
