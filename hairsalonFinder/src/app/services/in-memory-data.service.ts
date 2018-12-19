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
    // const salons = [];
    // for (let i = 0; i < faker.random.number(6); i++) {
    //   salons.push(this.salon());
    // }

    const salons = [
      {
        id: 11,
        name: 'Discover Your Beauty',
        address: 'Bijlmerdreef 184-B, 1102 AB Amsterdam',
        zone: 'SOUTH',
        hairservice: 'Haircuts',
        gender: 'Men'
      },
      {
        id: 12,
        name: 'Q Hairclub Amsterdam',
        address: 'Willem van Weldammelaan 29, 1082 KT Amsterdam',
        zone: 'WEST',
        hairservice: 'Haircuts',
        gender: 'All'
      },
    ];
    return { salons };
  }


  // salon() {
  //   return {
  //     id: faker.random.number(),
  //     name: faker.company.companyName(),
  //     logo: faker.image.imageUrl(),
  //   };
  // }
}
