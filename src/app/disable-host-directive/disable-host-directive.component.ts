import {
  afterRenderEffect,
  Component,
  computed,
  Directive,
  ElementRef,
  inject,
  input,
  model,
  signal,
} from '@angular/core';

@Directive({})
export class DisabledHelper {
  #elementRef = inject(ElementRef, { self: true, optional: true });
  #AppCardComponent = inject(AppCardComponent, { self: true, optional: true });
  disabled = input<boolean>(false);

  constructor() {
    afterRenderEffect(() => {
      console.log(`Element is ${this.disabled()}`);
      this.updateToReverseDisabled(this.disabled());
      console.log(`Element is ${this.disabled()}`);
    });
  }

  // do I like this?
  x = computed(() => this.updateToReverseDisabled(this.disabled()));

  updateToReverseDisabled(value: boolean) {
    if (this.#AppCardComponent) {
      this.#AppCardComponent.disableIt(value);
    }
    console.log('daslkjda', value, this.#elementRef?.nativeElement);
    this.#elementRef?.nativeElement.setAttribute('disabled', !value);
  }
}

@Directive({
  selector:
    'button[disabled],app-card[disabled], input[disabled], meter[ariaDisabled], appy-card[disabled]',
  hostDirectives: [{ directive: DisabledHelper }],
})
export class ButtonDisabledDirective {}

@Component({
  selector: 'app-card',
  template: `
    <div>
      <h1>d</h1>
    </div>
  `,
  styles: `:host{
    width: 580px;
    display:block;
    height:200px;
    background-color:red;}
  :host.is-disabled {
    background-color:purple;
  }`,
  host: {
    '[class.is-disabled]': 'disabled()',
  },
})
export class AppCardComponent {
  disabled = model(false);

  disableIt(value: boolean) {
    this.disabled.set(value);
  }
}
@Component({
  selector: 'appy-card',
  template: `
    <div>
      <h1>das</h1>
    </div>
  `,
  styles: `:host{
    width: 580px;
    display:block;
    height:200px;
    background-color:green;}
  :host.is-disabled {
    background-color:blue;
  }`,
  host: {
    '[class.is-disabled]': 'disabled()',
  },
})
export class AppyCardComponent {
  disabled = input(false);
}

@Component({
  selector: 'app-disable-host-directive',
  imports: [ButtonDisabledDirective, AppCardComponent, AppyCardComponent],
  templateUrl: './disable-host-directive.component.html',
  styleUrl: './disable-host-directive.component.css',
})
export default class DisableHostDirectiveComponent {
  disabled = signal(true);

  constructor() {
    setTimeout(() => {
      console.log('disabeld false');
      this.disabled.set(false);
    }, 5000);
  }
}
