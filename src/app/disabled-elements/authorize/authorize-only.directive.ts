import {
  ChangeDetectorRef,
  DestroyRef,
  Directive,
  Input,
  inject,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatButton } from '@angular/material/button';
import { AuthService } from './auth.service';
import { MatDatepicker } from '@angular/material/datepicker';


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
export const  AUTHORIZE_ONLY_DIRECTIVES = [AuthorizeOnlyDirective, DateAuthorizeOnlyDirective] ;
