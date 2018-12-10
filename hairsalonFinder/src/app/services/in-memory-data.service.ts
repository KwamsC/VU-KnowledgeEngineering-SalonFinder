import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Salon } from '../models/salon';
import { Injectable } from '@angular/core';
import { Stylist } from '../models/stylist';
import * as faker from 'faker';


@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const salons: Salon[] = [];

    for (let i = 0; i < faker.random.number(2); i++) {
      salons.push(this.salon());
    }
    return { salons };
  }


  salon(): Salon {
    return {
      id: faker.random.number(),
      name: faker.name.firstName(),
    };
  }
}
