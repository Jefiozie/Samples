// <script src="https://cdn.jsdelivr.net/npm/js-confetti@latest/dist/js-confetti.browser.js"></script>
//

import {
  APP_INITIALIZER,
  InjectionToken,
  makeEnvironmentProviders,
  Provider,
} from '@angular/core';

export const CONFETTI_STANDALONE = new InjectionToken<unknown>('jb-confetti');

export function provideEnvConfetti() {
  return makeEnvironmentProviders([CONFETTI_PROVIDER]);
}
// dont this in production
export function provideConfetti() {
  return CONFETTI_PROVIDER_X;
}

export const CONFETTI_PROVIDER: Provider = {
  provide: APP_INITIALIZER,
  multi: true,
  useFactory: loadScript,
};
// dont this in production
export const CONFETTI_PROVIDER_X: Provider = {
  provide: CONFETTI_STANDALONE,
  useFactory: loadScript(),
};

export function loadScript() {
  return async () =>
    await new Promise<void>((resolve) => {
      const script = document.createElement('script');
      script.async = true;
      script.src = `https://cdn.jsdelivr.net/npm/js-confetti@latest/dist/js-confetti.browser.js`;
      document.head.appendChild(script);
      script.onerror = async () => {
        // The script may have been blocked by an ad blocker
        console.error('The  script may have been blocked,');
        resolve();
      };
      script.onload = async () => {
        // when enableDebugging should load extra js
        resolve();
      };
    });
}
