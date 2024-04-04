
import { Component, ElementRef, Input, inject } from '@angular/core';

@Component({
  selector: 'my-dialog',
  standalone: true,
  imports: [],
  template: `<dialog>
    <ng-content></ng-content>
  </dialog>`,
  styles: [
    `
      ::backdrop {
        /* background: rgba(0, 0, 0, 0.32);  */
      }
      dialog {
        box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.15);
        flex-direction: column;
        background-color: white;
        overflow: hidden;
        padding: 1.875rem;
        color: #445262;
        position: relative;
        min-width: 31.25rem;
      }
    `,
  ],
})
export class DialogComponent {
  _show = false;
  #elm = inject(ElementRef).nativeElement as HTMLElement;
  @Input({ required: true })
  set shown(value: boolean) {
    this._show = value;
    const dlg = this.#elm.querySelector('dialog') as HTMLDialogElement;
    if (this._show) {
      dlg.showModal();
    } else {
      dlg.close();
    }
  }
}
