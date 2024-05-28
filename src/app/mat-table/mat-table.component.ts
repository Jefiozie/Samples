import { CdkRow } from '@angular/cdk/table';
import { JsonPipe } from '@angular/common';
import {
  Component,
  Directive,
  afterRender,
  contentChildren,
  signal,
  viewChildren,
} from '@angular/core';
import { MatRowDef, MatTableModule } from '@angular/material/table';

@Directive({
  selector: `[mat-table]`,
  standalone: true,
})
export class ADirective {
  rows = viewChildren(CdkRow);
  c_rows = contentChildren(CdkRow);
  def = contentChildren(MatRowDef);
  constructor() {
    console.log('s', this.rows(), this.c_rows(), this.def());

    afterRender(() => {
      console.log('after', this.rows(), this.c_rows(), this.def());
    });
  }
}

@Component({
  selector: 'app-mat-table',
  standalone: true,
  styleUrl: 'mat-table.component.css',
  imports: [MatTableModule, ADirective],
  templateUrl: './mat-table.component.html',
})
export class MatTableComponent {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;

  selectedRow = signal<PeriodicElement | null>(null);

  onRowClick(row: PeriodicElement) {
    this.selectedRow.set(row);
  }
}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];

@Component({
  standalone: true,
  imports: [MatTableComponent, JsonPipe, ADirective],
  template: `<h1>Table</h1>
    <app-mat-table />

    <code> {{ row() | json }}</code>`,
})
// [(selectedRow)]="row"
export default class MatTableDemoComponent {
  row = signal<PeriodicElement | null>(null);
}
