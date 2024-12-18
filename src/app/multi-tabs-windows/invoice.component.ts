import { JsonPipe } from '@angular/common';
import { Component, computed } from '@angular/core';
import { createBroadCastChannel } from './broadcast.service';
import { users } from './users';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';

@Component({
    selector: 'app-invoice',
    imports: [JsonPipe, NgxExtendedPdfViewerModule],
    template: `
    @if( $user()){
    <h1>We got something!</h1>
    <code>{{ $user() | json }}</code>

    @if($link()){
    <ngx-extended-pdf-viewer [src]="$link()"> </ngx-extended-pdf-viewer>
    } } @else {
    <h2>nothing posted in the message</h2>
    }
  `
})
export default class InvoiceComponent {
  c = createBroadCastChannel('invoice?');
  $user = computed(() => {
    return users.filter((user) => user.id.toString() == this.c.value())[0];
  });
  $link = computed(() => this.$user().pdf ?? '');
}
