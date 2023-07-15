import {
  ChangeDetectorRef,
  DestroyRef,
  Directive,
  ElementRef,
  Input,
  inject,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatButton } from '@angular/material/button';
import { MatDatepicker } from '@angular/material/datepicker';
import { AuthService } from './auth.service';

@Directive({
  selector: 'button[authorizeOnly]',
  standalone: true,
})
export class AuthorizeOnlyDirective {
  #button = inject(MatButton, { self: true });
  #changeDetectorRef = inject(ChangeDetectorRef);
  #authService = inject(AuthService);
  #destroyRef = inject(DestroyRef);

  @Input() set roles(value: string[]) {
    this.#authService
      .hasRole(value)
      .pipe(takeUntilDestroyed(this.#destroyRef))
      .subscribe((hasRole) => {
        // if user has role then disable button should be false
        this.updateDisabledStatus(!hasRole);
      });
  }
  updateDisabledStatus(value: boolean): void {
    this.#button.disabled = value;
    this.#changeDetectorRef.detectChanges();
  }
}
@Directive({
  selector: 'mat-datepicker[authorizeOnly]',
  standalone: true,
})
export class DateAuthorizeOnlyDirective {
  #datePicker = inject(MatDatepicker, { self: true });
  #changeDetectorRef = inject(ChangeDetectorRef);
  #authService = inject(AuthService);
  #destroyRef = inject(DestroyRef);

  @Input() set roles(value: string[]) {
    this.#authService
      .hasRole(value)
      .pipe(takeUntilDestroyed(this.#destroyRef))
      .subscribe((hasRole) => {
        // if user has role then disable button should be false
        this.updateDisabledStatus(!hasRole);
      });
  }
  updateDisabledStatus(value: boolean): void {
    this.#datePicker.disabled = value;
    this.#changeDetectorRef.detectChanges();
  }
}
@Directive({
  selector: 'div[authorizeOnly], a[authorizeOnly], input[authorizeOnly]',
  standalone: true,
})
export class HtmlElementsAuthorizeOnlyDirective {
  #elementRef = inject(ElementRef, { self: true });
  #authService = inject(AuthService);
  #destroyRef = inject(DestroyRef);

  @Input() set roles(value: string[]) {
    this.#authService
      .hasRole(value)
      .pipe(takeUntilDestroyed(this.#destroyRef))
      .subscribe((hasRole) => {
        // if user has role then disable button should be false
        this.updateDisabledStatus(!hasRole);
      });
  }
  updateDisabledStatus(value: boolean): void {
    if (
      this.#elementRef.nativeElement &&
      'disabled' in this.#elementRef.nativeElement
    ) {
      this.#elementRef.nativeElement.disabled = value;
    } else if (
      this.#elementRef.nativeElement &&
      'hidden' in this.#elementRef.nativeElement
    ) {
      // set pointer events to none
      this.#elementRef.nativeElement.style.pointerEvents = 'none';
      // set attribute disabled to true
      this.#elementRef.nativeElement.setAttribute('disabled', 'true');
    }
  }
}
export const AUTHORIZE_ONLY_DIRECTIVES = [
  AuthorizeOnlyDirective,
  DateAuthorizeOnlyDirective,
  HtmlElementsAuthorizeOnlyDirective,
];
