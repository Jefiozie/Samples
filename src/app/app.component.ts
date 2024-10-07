import { Component, inject } from '@angular/core';

import { RouterLink, RouterOutlet } from '@angular/router';
import { routes } from './app.routes';
import { SentenceCasePipe } from './pipes/sentenceCase.pipes';
import { RenderComponentService } from './render-component.service';
interface A {
  component: Function
}
const x: A = {
  component: () => import('./popover-example/popover-example.component');
}


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
    const lazy = x.component;
    const { default: cmp } = await x.component();
    this.rendercmpS.renderComponent(cmp, element);
  }
}
