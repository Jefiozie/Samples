import { Component, input, InputSignal, Signal } from '@angular/core';
import { TableData } from './table-one.component';
import { SignalGetter } from '@angular/core/primitives/signals';

@Component({
  template: ` <table>
    <thead>
      <th>G</th>
      <th>A</th>
      <th>H</th>
    </thead>
    <tbody>
      <tr id="1">
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
  </table>`,
})
export default class TableTwoComponet implements TableData {
  data = input<Array<any>>([]);

  $headers!: any;
  $values!: any;
}
