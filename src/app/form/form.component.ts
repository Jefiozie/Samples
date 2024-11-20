import { CommonModule } from '@angular/common';
import {
  ChangeDetectorRef,
  Component,
  Directive,
  ElementRef,
  OnDestroy,
  inject,
} from '@angular/core';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { ValidatorDirective } from '@validointi/core';
import { FormDataService } from './form.service';
import { tap } from 'rxjs';

@Directive({
  selector: '[ngModel]',
  standalone: true,
})
export class ValidationErrorHookUpDirective implements OnDestroy {
  // #elm = inject(ElementRef, { optional: true }).nativeElement as HTMLInputElement | null;
  #cdr = inject(ChangeDetectorRef);
  #model = inject(NgModel);
  lastState = '';

  #change = (status: string) => {
    const errors = this.#model.control.errors;
    // if (errors) {

    //   Object.entries(errors).forEach(([key, value]) => {
    //     const errMsg = Array.isArray(value) ? value.join('\n') : value;
    //     if(!this.#elm) return;
    //     this.#elm?.setCustomValidity(errMsg);
    //     this.#elm?.title = errMsg;
    //   });
    // } else {
    //   this.#elm?.setCustomValidity('');
    //   this.#elm?.title = '';
    // }
    /**
     * Make sure the ui is updated,
     * but only when there is an invalid state!
     * when the state is valid, the ui is updated by the form itself.
     */
    if (status !== this.lastState) {
      this.#model.control.markAllAsTouched();
      this.#model.control.markAsDirty();
      this.#cdr.detectChanges();
      this.lastState = status;
    }
  };

  #sub = this.#model.statusChanges?.pipe(tap(this.#change)).subscribe();

  ngOnDestroy(): void {
    this.#sub?.unsubscribe();
  }
}

@Component({
    selector: 'app-form',
    imports: [
        CommonModule,
        FormsModule,
        ValidatorDirective,
        // ValidationErrorHookUpDirective,
    ],
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.css']
})
export default class FormComponent {
  vmService = inject(FormDataService);
  model$ = this.vmService.model$;

  onSubmit(form: NgForm) {
    this.vmService.onSubmit(form.value);
  }
}
