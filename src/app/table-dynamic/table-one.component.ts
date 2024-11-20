import { JsonPipe } from '@angular/common';
import { Component, InputSignal, Signal, computed, input } from '@angular/core';
export interface TableData {
  data: InputSignal<Array<any>>;
  $headers: any;
  $values: any;
}
@Component({
    imports: [JsonPipe],
    template: `
    <table>
      <thead>
        @for(header of $headers(); track $index){
        <th>{{ header }}</th>
        }
      </thead>
      <tbody>
        <tr>
          @for(value of $values(); track $index){
          <td>{{ value }}</td>

          }
        </tr>
      </tbody>
    </table>
  `,
    styles: `
  td{ 
    word-wrap: break-word;
    text-align:center;
  }`
})
export default class TableOneComponet implements TableData {
  data = input<Array<any>>([]);

  $headers = computed(() =>
    this.data().length > 0 ? Object.keys(this.data()[0]) : []
  );
  $values = computed(() =>
    this.$headers().length > 0
      ? this.$headers().map((item: string) => {
          return this.data().map((row) => row[item]);
        })
      : []
  );
}
