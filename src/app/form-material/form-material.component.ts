import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormDataService } from '../form/form.service';
import { FormsModule, NgForm } from '@angular/forms';
import { vldntiDirectives } from '@validointi/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { ValidationErrorHookUpDirective } from '../form/form.component';

@Component({
    selector: 'app-form-material',
    imports: [
        CommonModule,
        FormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatCheckboxModule,
        vldntiDirectives,
        ValidationErrorHookUpDirective
    ],
    templateUrl: './form-material.component.html',
    styleUrls: ['./form-material.component.css']
})
export default class FormMaterialComponent {
  vmService = inject(FormDataService);
  model$ = this.vmService.model$;
  fieldValidation = true

  onSubmit(form: NgForm) {
    this.vmService.onSubmit(form.value);
  }
}
