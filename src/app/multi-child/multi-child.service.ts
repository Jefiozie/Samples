import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class MultiChildService {
  readonly items = signal<{ id: number; text: string }[]>([]);
  readonly list = signal<{ id: number; text: string }[]>([]);

  constructor() {
    this.fillData();
  }
  private async fillData(amount: number = 10) {
    const { faker } = await import('@faker-js/faker');

    const items: { id: number; text: string }[] = [];
    for (let index = 0; index < amount; index++) {
      items.push({
        id: index,
        text: faker.finance.accountName(),
      });
    }
    this.list.set(items);
  }
  add = (id: number, text: string) => {
    console.log(id, text, this.items());
    this.items.update((items) => {
      return [...items, { id, text }];
    });
  };
  delete = (id: number) => {
    this.items.update((items) => {
      return items.filter((_items) => _items.id !== id);
    });
  };
}
