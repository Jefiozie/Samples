import { Injectable, signal } from '@angular/core';

export interface FinanceRecord {
  accountNumber: string;
  accountName: string;
}

@Injectable({ providedIn: 'root' })
export class FinanceService {
  #faker = import('@faker-js/faker');
  private $list = signal([] as FinanceRecord[]);
  list = this.$list.asReadonly();
  constructor() {
    this.generateFinance(100);
  }
  async generateFinance(amount: number) {
    const list = new Array<FinanceRecord>();
    for (let index = 0; index < amount; index++) {
      const { faker } = await this.#faker;
      const resource = {
        accountNumber: faker.finance.accountNumber(),
        accountName: faker.finance.accountName(),
      };
      list.push(resource);
    }
    list[0].accountNumber = '1';
    console.dir(list);
    this.$list.set(list);
  }

  getAll = () => this.list;
  getById = (id: number | string) => {
    return this.list().filter(
      (item) => item.accountNumber.toString() == id.toString()
    );
  };
}
