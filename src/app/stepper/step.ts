import { Component, computed, inject, input, signal } from '@angular/core';
import { StepperComponent, StepperState } from './stepper.component';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-step',
  standalone: true,
  styles: `
  :host{
    display: inline-block;
    margin: 5px;
   
  }
  :host[aria-selected="true"] {
    font-weight:bold;
  }
  :host.selected{
    background-color:var(--violet-5);
  }
  :host.completed{
    background-color:var(--link);
  }
  id {
    display: inline-block;
    text-align: center;
    width: 1.3rem;
    line-height: 1.3rem;
    background-color: lightgray;
    color: colors.$white;
    border-radius: 100%;
    margin-right: 0.8rem;
  }

 
  `,
  template: `
    <!-- isSelected: {{ isSelected() }} value:{{ value() ?? 'empty' }} -->
    <ng-content />
  `,
  host: {
    '[attr.aria-selected]': 'isSelected()',
    '[class.selected]': 'isSelected()',
    '[class.completed]': 'isSelected()',
    '(click)': 'select()',
    '[tabIndex]': 'isActive() ? 0 : -1',
  },
})
export class StepComponent<T> {
  // private stepper = inject<StepperComponent<unknown>>(StepperComponent);
  private service = inject<StepperState<unknown>>(StepperState);

  // readonly isSelected = computed(() => this.value() === this.service.value());
  readonly disabled = input(false);

  value = input.required<T | undefined>();

  protected readonly isDisabled = computed(() => this.disabled());

  protected select() {
    if (!this.isDisabled()) {
      // this.service.setSelectedStep(this);
    }
  }
  // doesntwork yet
  // readonly isActive = computed(() => this === this.stepper.activeStep());
}
