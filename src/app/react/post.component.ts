import {
  Component,
  input,
  NO_ERRORS_SCHEMA,
  output
} from '@angular/core';
import { ReactComponentDirective } from './react.component.directive';
type Post = { title: string; description: string; pictureLink: string };

@Component({
    selector: 'app-post',
    template: `
    <div
      appReactDirective
      [props]="post()"
      [props.selected]="isSelected()"
      (click)="selectPost.emit()"
    ></div>
  `,
    styles: [''],
    imports: [ReactComponentDirective],
    schemas: [NO_ERRORS_SCHEMA]
})
export class PostComponent {
  post = input<Post | undefined>(undefined);
  isSelected = input<boolean>(false);
  readonly selectPost = output<void>();
}
