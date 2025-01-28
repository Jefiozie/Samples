import { TestBed } from '@angular/core/testing';
import { RouterTestingHarness } from '@angular/router/testing';

import RouterInputComponent from './router-input.component';
import { provideRouter, withComponentInputBinding } from '@angular/router';

fdescribe('RouterInputComponent', () => {
  let component: RouterInputComponent;
  let harness: RouterTestingHarness;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterInputComponent],
      providers: [
        provideRouter(
          [
            {
              path: 'router-input',
              component: RouterInputComponent,
            },
            {
              path: 'router-input/:id/:phone',
              component: RouterInputComponent,
            },
          ],
          withComponentInputBinding()
        ),
      ],
    }).compileComponents();

    harness = await RouterTestingHarness.create();
    component = await harness.navigateByUrl(
      'router-input',
      RouterInputComponent
    );
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have id', async () => {
    component = await harness.navigateByUrl(
      'router-input/1/4',
      RouterInputComponent
    );
    expect(component.id()).toBe('1');
    expect(component.phone()).toBe('4');
  });
});
