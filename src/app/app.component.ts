import { afterRender, Component, inject } from '@angular/core';

import { RouterLink, RouterOutlet } from '@angular/router';
import { routes } from './app.routes';

import { RenderComponentService } from './render-component.service';
import { provideConfetti, CONFETTI_STANDALONE } from './utils/providerExample';
interface A {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  component: any;
}
const x: A = {
  component: () => import('./popover-example/popover-example.component'),
};

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, RouterLink],
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'standalone-app';
  routes = routes;
  rendercmpS = inject(RenderComponentService);
  // wx = inject(CONFETTI_STANDALONE);
  constructor() {
    // dont this in production
    setTimeout(() => {
      const canvas = document.getElementById('body');
      const button = document.getElementById('button') as HTMLButtonElement;

      //@ts-ignore-error
      // const jsConfetti = new JSConfetti({ canvas });

      // setTimeout(() => {
      //   jsConfetti.addConfetti({
      //     confettiRadius: 12,
      //     emojiSize: 100,
      //     confettiNumber: 3000,
      //   });
      // }, 800);

      // button.addEventListener('click', () => {
      //   jsConfetti.addConfetti();
      // });
      // ! FIXME: this should be changed
    }, 0);
  }

  async lazyRenderCmpClick() {
    const element = document.querySelector<HTMLElement>('#renderCmp')!;
    const lazy = x.component;
    const { default: cmp } = await x.component();
    this.rendercmpS.renderComponent(cmp, element);
  }
}