import { NgComponentOutlet } from '@angular/common';
import { Component, Type, inject, input, signal } from '@angular/core';
import { DataService } from '../shared/data.service';

type abc = Array<{ key: string; value: string }>;
const tableOptions = {
  optionA: () => import('./table-one.component'),
  optionB: () => import('./table-two.component'),
};

type TableOptions = keyof typeof tableOptions;
@Component({
    selector: `app-dynamic-table`,
    imports: [NgComponentOutlet],
    template: `
    <button type="button" (click)="handleClick()">
      {{ title() }}
    </button>
    @if($cmp()){
    <ng-container
      *ngComponentOutlet="$cmp(); inputs: { data: data() }"
    ></ng-container>
    }
  `
})
export class DropdownWithPreSetComponent {
  data = input<abc>([]);
  title = input.required();
  cmp = input.required<TableOptions | null>();
  $cmp = signal<Type<any> | null>(null);

  async handleClick() {
    if (this.cmp()) {
      const tableCmp = tableOptions[this.cmp()!];
      const { default: cmp } = await tableCmp();
      this.$cmp.set(cmp);
    } else {
      this.$cmp.set(null);
    }
  }
}

@Component({
    imports: [DropdownWithPreSetComponent],
    template: `
    <section>Open? : {{ $isOpen() }}</section>
    <section>cmp : {{ $cmpToSelect() }}</section>
    <button (click)="switchTable()">Switch cmp</button>
    <section>
      <app-dynamic-table [title]="title" [cmp]="$cmpToSelect()" [data]="data" />
    </section>
  `
})
export default class TableDynamicComponent {
  dataService = inject(DataService);
  title = 'mooie knop';
  $cmpToSelect = signal<TableOptions | null>('optionA');
  $isOpen = signal<boolean>(false);
  data: abc = this.dataService.users;
  switchTable() {
    const localReference = this.$cmpToSelect();
    this.$cmpToSelect.set(null);
    if (localReference === 'optionA') {
      this.$cmpToSelect.set('optionB');
      return;
    }

    this.$cmpToSelect.set('optionB');
  }
}
