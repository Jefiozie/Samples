import { NgTemplateOutlet } from '@angular/common';
import {
  Component,
  Directive,
  HostListener,
  TemplateRef,
  computed,
  contentChild,
  input,
  model,
  output,
  signal,
} from '@angular/core';

type abc = Array<{ key: string; value: string }>;

@Component({
    selector: `app-thing-3`,
    imports: [NgTemplateOutlet],
    template: `
    <button type="button" (click)="showTable.set(!showTable())">
      {{ title() }}
    </button>
    @if($computedOpen()){ @if(x()){

    <ng-container *ngTemplateOutlet="$any(x())" />
    } @else{
    <table>
      @for (item of data(); track item.key) {}
      <thead>
        <th>A</th>
        <th>B</th>
        <th>C</th>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>2</td>
          <td>3</td>
        </tr>
      </tbody>
    </table>
    }}
  `
})
export class V3ThingUiComponent {
  x = contentChild('thingX', { read: TemplateRef<Element> });
  showTable = model<boolean>(false);
  data = model<abc>([]);
  title = input.required();
  isOpen = input(false);

  $computedOpen = computed(() => this.showTable());
}

@Directive({
  selector: `tr [id]`,
  standalone: true,
})
export class SelectionTr {
  id = input.required<string>();
  $selected = output<string>();
  @HostListener('click')
  handleTrClick() {
    console.log(this.id());
    this.$selected.emit(this.id());
  }
}

@Component({
    imports: [V3ThingUiComponent, SelectionTr],
    template: `
    <section>Open? : {{ isOpen() }}</section>
    <section hidden>
      <app-thing-3 [title]="title" [(showTable)]="isOpen"> </app-thing-3>
    </section>
    <section>
      <app-thing-3 [title]="title" [(showTable)]="isOpen">
        <ng-template #thingX>
          <table>
            <thead>
              <th>C</th>
              <th>B</th>
              <th>A</th>
            </thead>
            <tbody>
              <tr id="1" ($selected)="selected($event)">
                <td>1</td>
                <td>2</td>
                <td>3</td>
              </tr>
              <tr id="2">
                <td>3</td>
                <td>2</td>
                <td>1</td>
              </tr>
            </tbody>
          </table>
        </ng-template>
      </app-thing-3>
    </section>
  `
})
export default class ThingComponent {
  title = 'mooi';
  selected = (a: any) => console.error(a);
  isOpen = signal<boolean>(false);
}
