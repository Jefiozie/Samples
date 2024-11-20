import { AsyncPipe, JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { createBroadCastChannel } from './broadcast.service';
import InvoiceComponent from './invoice.component';
@Component({
    selector: 'app-multi-tabs-windows',
    imports: [JsonPipe, AsyncPipe, InvoiceComponent],
    templateUrl: './multi-tabs-windows.component.html',
    styleUrl: './multi-tabs-windows.component.css'
})
export default class MultiTabsWindowsComponent {
  i = 1;
  c = createBroadCastChannel(`invoice?`);
  sendMessage() {
    this.c.sendMessage(`${this.i++}`);
  }
}
