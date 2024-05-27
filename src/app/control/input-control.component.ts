/* eslint-disable @angular-eslint/no-host-metadata-property */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Component, Directive, inject } from '@angular/core';
import {
  ControlValueAccessor,
  FormControlDirective,
  FormControlName,
  NG_VALUE_ACCESSOR,
  NgControl,
  NgModel,
  ReactiveFormsModule,
} from '@angular/forms';
class NoopValueAccessor implements ControlValueAccessor {
  writeValue() {}
  registerOnChange() {}
  registerOnTouched() {}
}

function injectNgControl() {
  const ngControl = inject(NgControl, { self: true, optional: true });

  if (!ngControl) {
    return;
  }
  if (
    ngControl instanceof FormControlDirective ||
    ngControl instanceof FormControlName ||
    ngControl instanceof NgModel
  ) {
    ngControl.valueAccessor = new NoopValueAccessor();

    return ngControl;
  }

  throw new Error(`...`);
}
@Directive({
  standalone: true,
  host: {
    '(input)': '$any(this)._handleInput($event.target.value)',
  },
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: NoopValueAccessorDirective,
    },
  ],
})
export class NoopValueAccessorDirective implements ControlValueAccessor {
  writeValue(value: any): void {
    const normalizedValue = value == null ? '' : value;
    console.log(value, 'value dir');
  }
  /**
   * The registered callback function called when a change or input event occurs on the input
   * element.
   * @nodoc
   */
  onChange = (_: any) => {
    console.error(_, 'change');
  };

  /**
   * The registered callback function called when a blur event occurs on the input element.
   * @nodoc
   */
  onTouched = () => {};
  /** @internal */
  _handleInput(value: any): void {
    this.onChange(value);
  }
  registerOnChange(fn: (_: any) => {}): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {}
}
@Component({
  selector: 'app-input',
  standalone: true,
  imports: [ReactiveFormsModule],
  hostDirectives: [NoopValueAccessorDirective],
  template: `<input type="text" [formControl]="ngControl!.control" />`
})
export class InputComponent {
  ngControl = injectNgControl();
}
