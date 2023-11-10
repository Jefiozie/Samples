import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogComponent } from './dialog.component';

@Component({
  selector: 'app-dialog-test',
  standalone: true,
  imports: [CommonModule, DialogComponent],
  templateUrl: './dialog-test.component.html',
  styleUrls: ['./dialog-test.component.css'],
})
export default class DialogTestComponent {
  showDialog = false;
  closeDialog = () => (this.showDialog = false);
  openDialog = () => (this.showDialog = true);
}
