import { Component } from '@angular/core';

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
export default class TableTwoComponet {}
