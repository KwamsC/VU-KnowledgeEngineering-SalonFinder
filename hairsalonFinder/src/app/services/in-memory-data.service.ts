import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs/index';
import * as faker from 'faker/locale/nl';
// import { Salon } from '../models/salon';
import { Injectable } from '@angular/core';
// import { Stylist } from '../models/stylist';

@Injectable()
export class InMemoryDataService extends InMemoryDbService {


  constructor() {
    super();
  }

  createDb(): {} | Observable<{}> | Promise<{}> {
    const salons = [];
    for (let i = 0; i < faker.random.number(6); i++) {
      salons.push(this.salon());
    }
    return { salons };
  }


  salon() {
    return {
      id: faker.random.number(),
      name: faker.company.companyName(),
      logo: faker.image.imageUrl(),
    };
  }
}
