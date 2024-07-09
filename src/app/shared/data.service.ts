import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker';

@Injectable({ providedIn: 'root' })
export class DataService {
  users!: any[];
  constructor() {
    const users = Array.from({ length: 5 }, () => ({
      ...this.createRandomUser(),
    }));
    this.users = users;
  }

  createRandomUser(): any {
    return {
      userId: faker.string.uuid(),
      username: faker.internet.userName(),
      birthdate: faker.date.birthdate(),
      registeredAt: faker.date.past(),
    };
  }

  getById = (id: string) => {
    return this.users.find((user) => user.userId === id);
  };
}
