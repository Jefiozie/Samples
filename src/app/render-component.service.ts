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
  private readonly injector = inject(Injector);

  renderComponent<T>(cmp: Type<T>, hostElement: HTMLElement) {
    const componentRef = createComponent(cmp, {
      environmentInjector: this.environmentInjector,
      elementInjector: this.injector,
      hostElement,
    });

    // if we need to set inputs?
    // componentRef.setInput

    componentRef.changeDetectorRef.detectChanges();

    
  }
}
