import { JsonPipe } from '@angular/common';
import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-vm-signal',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './vm-signal.component.html',
  styleUrl: './vm-signal.component.css',
})
export class VmSignalComponent {
  //#region no vm
  $filter = signal({ search: '' });
  $beData = signal({ data: ['A name', 'B Name', 'C Name'] });
  //#endregion

  $inputValue = signal<string>('');

  $vm = computed(() => {
    const searchString = this.$inputValue();
    const data = this.$beData();
    if (searchString === '' || searchString === undefined) {
      return data.data;
    }

    return data.data.filter((e) =>
      e.toLowerCase().includes(searchString.toLowerCase())
    );
  });
}
