import { Injectable, inject } from '@angular/core';
import { ValidatorRegistryService, createVestAdapter } from '@validointi/core';
import { Observable, delay, of } from 'rxjs';
import { create, enforce, omitWhen, test } from 'vest';
interface Model {
  name: string;
  sendEmail: boolean;
  email: string;
}
@Injectable({ providedIn: 'root' })
export class FormDataService {
  model$: Observable<Model> = of({
    name: '',
    sendEmail: false,
    email: '',
  }).pipe(delay(1000));

  #vr = inject(ValidatorRegistryService);
  validate = this.#vr.registerValidator(
    'sample-data',
    createVestAdapter(suite)
  );

  async onSubmit(data: any) {
    const validationResult = await this.validate(data);
    console.table(validationResult);
  }
}

const suite = (data: Model = {} as Model, field: any) =>
  create(() => {
    test('name', 'Name is required', () => {
      enforce(data.name).isNotBlank();
    });

    test('name', 'Name must be at least 3 characters long', () => {
      enforce(data.name).longerThan(2);
    });

    omitWhen(!data.sendEmail, () => {
      test('email', 'Email is required', () => {
        enforce(data.email).isNotBlank();
      });
    });
  })();
