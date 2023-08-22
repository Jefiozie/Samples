import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormDataService } from '../form/form.service';
import { FormsModule, NgForm } from '@angular/forms';
import { ValidatorDirective } from '@validointi/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';

@Component({
  selector: 'app-form-material',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    ValidatorDirective,
    // ValidationErrorHookUpDirective
  ],
  templateUrl: './form-material.component.html',
  styleUrls: ['./form-material.component.css'],
})
export default class FormMaterialComponent {
  vmService = inject(FormDataService);
  model$ = this.vmService.model$;

  onSubmit(form: NgForm) {
    this.vmService.onSubmit(form.value);
  }
}
