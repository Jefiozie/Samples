import { Component, signal } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-data-selection',
  standalone: true,
  imports: [MatSelectModule, MatFormFieldModule],
  templateUrl: './data-selection.component.html',
  styleUrl: './data-selection.component.css',
})
export default class DataSelectionComponent {
  id = signal('');
}
