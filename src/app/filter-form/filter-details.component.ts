import { DatePipe } from '@angular/common';
import { Component, inject, input, Signal } from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { isObservable, Observable, of, switchMap } from 'rxjs';
import { DataService } from '../shared/data.service';

@Component({
    selector: 'detail',
    imports: [DatePipe],
    template: `
    @if(user()){ @let users = user();

    <details>
      <fieldset>
        <label for="userName">ID</label>
        <input
          type="text"
          id="userName"
          name="userName"
          [value]="users.userId"
          disabled
        />
      </fieldset>
      <fieldset>
        <label for="userName">Username</label>
        <input
          type="text"
          id="userName"
          name="userName"
          [value]="users.username"
          disabled
        />
      </fieldset>
      <fieldset>
        <label for="userName">BirthDate</label>
        <input
          type="text"
          id="userName"
          name="userName"
          [value]="users.birthdate | date : 'yyyy-MM-dd'"
          disabled
        />
      </fieldset>
    </details>
    }
  `
})
export default class DetailComponent {
  service = inject(DataService);
  userId = input.required<string>();

  user = computedObservable(this.userId, (userId) => {
    console.log(userId);
    return this.service.getById(userId);
  });
}

export function computedObservable<T, O>(
  source: Signal<T>,
  project: (value: T) => O | Observable<O>
): Signal<O | undefined> {
  return toSignal(
    toObservable(source).pipe(
      switchMap((input) => {
        const value$ = project(input);

        if (!isObservable(value$)) {
          return of(value$);
        }

        return value$;
      })
    )
  );
}
