/* eslint-disable @angular-eslint/no-host-metadata-property */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Component,
  Directive,
  HostBinding,
  Input,
  booleanAttribute,
  inject,
} from '@angular/core';
import {
  AbstractControlDirective,
  ControlValueAccessor,
  FormControlDirective,
  FormControlName,
  NG_VALUE_ACCESSOR,
  NgControl,
  NgModel,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import {
  MAT_FORM_FIELD,
  MatFormFieldControl,
} from '@angular/material/form-field';
import { Observable, Subject } from 'rxjs';
// let nextUniqueId = 0;

// class NoopFormField<V> implements ControlValueAccessor {
//   writeValue() {}
//   registerOnChange() {}
//   registerOnTouched() {}
// }

// @Directive({
//   standalone: true,
//   host: {
//     '(input)': '$any(this)._handleInput($event.target.value)',
//   },
//   providers: [
//     {
//       provide: NG_VALUE_ACCESSOR,
//       multi: true,
//       useExisting: NoopFormFieldDirective,
//     },
//     {
//       provide: MatFormFieldControl,
//       multi: true,
//       useExisting: NoopFormFieldDirective,
//     },
//   ],
// })
// export class NoopFormFieldDirective<V>
//   implements ControlValueAccessor, MatFormFieldControl<V>
// {

//   ngControl = inject(NgControl, { optional: true, self: true });

//   readonly controlType = 'fc-something';
//   @HostBinding() id = `${this.controlType}-${nextUniqueId++}`;
//   setDescribedByIds(ids: string[]): void {
//     this.describedBy = ids.join(' ');
//   }

//   onContainerClick(event: MouseEvent): void {
//     this.#focused = true;
//   }

//   public writeValue(value: V): void {
//     this.value = value;
//   }

//   public registerOnChange(fn: (value: V) => void): void {
//     this._onChange = fn;
//   }

//   public registerOnTouched(fn: () => void): void {
//     this._onTouched = fn;
//   }

//   setDisabledState?(isDisabled: boolean): void {
//     // do nohting
//   }

//   private _onChange: (value: V) => void = (value: V) => {}; // eslint-disable-line @typescript-eslint/no-empty-function
//   private _onTouched: () => void = () => {}; // eslint-disable-line @typescript-eslint/no-empty-function
//   @HostBinding('attr.aria-describedby') describedBy = '';
//   readonly #stateChanges = new Subject<void>();
//   _value!: V;
//   @Input()
//   get value(): V {
//     return this._value;
//   }
//   set value(value: V) {
//     this._value = value;
//   }

//   @Input({ transform: booleanAttribute })
//   get required(): boolean {
//     return (
//       this.#required ??
//       this.ngControl?.control?.hasValidator(Validators.required) ??
//       false
//     );
//   }
//   set required(value: boolean) {
//     this.#required = value;
//     this.#stateChanges.next();
//   }
//   #required = false;

//   @Input({ transform: booleanAttribute })
//   get disabled(): boolean {
//     return this.#disabled;
//   }
//   set disabled(value: boolean) {
//     this.#disabled = value;
//     this.#stateChanges.next();
//   }
//   #disabled = false;
//   @Input()
//   get placeholder(): string {
//     return this.#placeholder;
//   }
//   set placeholder(value: string) {
//     this.#placeholder = value;
//     this.#stateChanges.next();
//   }
//   #placeholder = '';

//   @Input({ transform: booleanAttribute })
//   get errorState(): boolean {
//     return this.#errorState;
//   }
//   set errorState(value: boolean) {
//     this.#errorState = value;
//     this.#stateChanges.next();
//   }
//   #errorState = false;

//   #focused = false;
//   get focused(): boolean {
//     return this.#focused;
//   }
//   get shouldLabelFloat(): boolean {
//     return !this.empty || !!this.placeholder || this.focused;
//   }

//   get empty(): boolean {
//     return this._value === '';
//   }

//   get stateChanges(): Observable<void> {
//     return this.#stateChanges.asObservable();
//   }
// }

// function injectFormField() {
//   const ngControl = inject(NgControl, { self: true, optional: true });

//   if (!ngControl) {
//     return;
//   }
//   if (
//     ngControl instanceof FormControlDirective ||
//     ngControl instanceof FormControlName ||
//     ngControl instanceof NgModel
//   ) {
//     ngControl.valueAccessor = new NoopFormField();

//     return ngControl;
//   }

//   throw new Error(`...`);
// }

let nextUniqueId = 0;

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
    {
      provide: MAT_FORM_FIELD,
      multi: true,
      useExisting: NoopValueAccessorDirective,
    },
  ],
})
export class NoopValueAccessorDirective<V>
  implements ControlValueAccessor, MatFormFieldControl<V>
{
  ngControl!: NgControl | AbstractControlDirective | null;
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

  // !!! FORMFIELD
  readonly controlType = 'fc-something';
  @HostBinding() id = `${this.controlType}-${nextUniqueId++}`;
  @HostBinding('attr.aria-describedby') describedBy = '';
  readonly #stateChanges = new Subject<void>();
  setDescribedByIds(ids: string[]): void {
    this.describedBy = ids.join(' ');
  }

  onContainerClick(event: MouseEvent): void {
    this.#focused = true;
  }

  _value!: V;
  @Input()
  get value(): V {
    return this._value;
  }
  set value(value: V) {
    this._value = value;
  }

  @Input({ transform: booleanAttribute })
  get required(): boolean {
    return (
      this.#required ??
      this.ngControl?.control?.hasValidator(Validators.required) ??
      false
    );
  }
  set required(value: boolean) {
    this.#required = value;
    this.#stateChanges.next();
  }
  #required = false;

  @Input({ transform: booleanAttribute })
  get disabled(): boolean {
    return this.#disabled;
  }
  set disabled(value: boolean) {
    this.#disabled = value;
    this.#stateChanges.next();
  }
  #disabled = false;
  @Input()
  get placeholder(): string {
    return this.#placeholder;
  }
  set placeholder(value: string) {
    this.#placeholder = value;
    this.#stateChanges.next();
  }
  #placeholder = '';

  @Input({ transform: booleanAttribute })
  get errorState(): boolean {
    return this.#errorState;
  }
  set errorState(value: boolean) {
    this.#errorState = value;
    this.#stateChanges.next();
  }
  #errorState = false;

  #focused = false;
  get focused(): boolean {
    return this.#focused;
  }
  get shouldLabelFloat(): boolean {
    return !this.empty || !!this.placeholder || this.focused;
  }

  get empty(): boolean {
    return this._value === '';
  }

  get stateChanges(): Observable<void> {
    return this.#stateChanges.asObservable();
  }
}
@Component({
    selector: 'app-form-input',
    imports: [ReactiveFormsModule],
    hostDirectives: [NoopValueAccessorDirective],
    template: `<input type="text" [value]="ngControl!.value" />`
})
export class FormFieldComponent<V> {
  ngControl = injectNgControl();
}
