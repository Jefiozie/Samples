import {
  createComponent,
  EnvironmentInjector,
  inject,
  Injectable,
  Injector,
  Type,
} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RenderComponentService {
  private readonly environmentInjector = inject(EnvironmentInjector);
  // root injector
  private readonly injector = inject(Injector);

  renderComponent<T>(cmp: Type<T>, hostElement: HTMLElement) {
    const componentRef = createComponent(cmp, {
      hostElement,
      environmentInjector: this.environmentInjector,
      elementInjector: this.injector,
    });

    // if we need to set inputs?
    componentRef.setInput('inputa', 'valueb')

    componentRef.changeDetectorRef.detectChanges();

    
  }
}
