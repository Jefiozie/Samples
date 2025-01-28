
import { Component, computed, inject, signal } from '@angular/core';
import { DataService } from '../shared/data.service';
import FilterComponent from './filter.component';
import DetailComponent from './filter-details.component';

@Component({
    selector: 'app-filter-form',
    imports: [FilterComponent, DetailComponent],
    template: `<p>filter-form works!</p>
    <filter [(birthDate)]="birthDate" [(userName)]="userName" />
    <detail [userId]="data()" /> `
})
export default class FilterFormComponent {
  #service = inject(DataService);
  birthDate = signal<Date | undefined>(undefined);
  userName = signal<string>('');

  data = computed(() => {
    const birthDate = this.birthDate();
    const username = this.userName();
    if (username !== '' && birthDate !== undefined) {
      const data = this.#service.users.find((user) => {
        return (
          (user?.username as string).includes(username) ||
          (user?.birthdate as Date).getTime() === birthDate.getTime()
        );
      });
      return data?.userId ?? '';
    }
  });
}
