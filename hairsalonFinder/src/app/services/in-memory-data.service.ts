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

  createDb() {
    const salons = [
      {
        id: 1,
        name: 'Discover Your Beauty',
        address: 'Bijlmerdreef 184-B, 1102 AB Amsterdam',
        zone: 'SOUTH',
        hairservice: [
          {
            haiserviceID: faker.random.number(),
            name: 'Haircuts',
          },
        ],
        gender: 'Men',
        skill: 'Haircuts'
      },
      {
        id: 2,
        name: 'Q Hairclub Amsterdam',
        address: 'Willem van Weldammelaan 29, 1082 KT Amsterdam',
        zone: 'WEST',
        hairservice: [
          {
            haiserviceID: faker.random.number(),
            name: 'Haircuts',
          },
        ],
        gender: 'All',
        skill: 'Haircuts'
      },
      {
        id: 3,
        name: 'Hair Basement',
        address: 'Populierenweg 14D, 1091KK Amsterdam',
        zone: 'EAST',
        hairservice: [
          {
            haiserviceID: faker.random.number(),
            name: 'Haircuts',
          },
          {
            haiserviceID: faker.random.number(),
            name: 'Hairstyle',
          },
          {
            haiserviceID: faker.random.number(),
            name: 'Hairtreatments',
          }
        ],
        gender: 'Women',
        skill: 'Hairtreatments'
      },
      {
        id: 4,
        name: 'Tanya Beauty Center',
        address: 'Viermasterstraat 17, 1034XN Amsterdam',
        zone: 'NORTH',
        hairservice: [
          {
            haiserviceID: faker.random.number(),
            name: 'Haircuts',
          },
          {
            haiserviceID: faker.random.number(),
            name: 'Hairstyle',
          },
          {
            haiserviceID: faker.random.number(),
            name: 'Hairtreatments',
          }
        ],
        gender: 'All',
        skill: 'Hairstyle'
      },
      {
        id: 5,
        name: 'Latique',
        address: 'Dintelstraat 120, 1079BC Amsterdam',
        zone: 'SOUTH',
        hairservice: [
          {
            haiserviceID: faker.random.number(),
            name: 'Haircuts',
          },
          {
            haiserviceID: faker.random.number(),
            name: 'Hairstyle',
          },
          {
            haiserviceID: faker.random.number(),
            name: 'Hairtreatments',
          }
        ],
        gender: 'All',
        skill: 'Hairtreatments'
      },
      {
        id: 6,
        name: 'The Barbershop Amsterdam',
        address: 'Burgemeester Rendorpstraat 11-15, 1064EL Amsterdam',
        zone: 'WEST',
        hairservice: [
          {
            haiserviceID: faker.random.number(),
            name: 'Haircuts',
          },
        ],
        gender: 'Men',
        skill: 'Haircuts'
      },
      {
        id: 7,
        name: 'Studio Style Up',
        address: 'Ruyschstraat 66, Amsterdam',
        zone: 'EAST',
        hairservice: [
          {
            haiserviceID: faker.random.number(),
            name: 'Haircuts',
          },
          {
            haiserviceID: faker.random.number(),
            name: 'Hairstyle',
          },
          {
            haiserviceID: faker.random.number(),
            name: 'Hairtreatments',
          }
        ],
        gender: 'Men',
        skill: 'Hairstyle'
      },
      {
        id: 8,
        name: 'IJ Haarmode',
        address: 'Hagedoornweg 48A, 1031BS Amsterdam',
        zone: 'NORTH',
        hairservice: [
          {
            haiserviceID: faker.random.number(),
            name: 'Haircuts',
          },
          {
            haiserviceID: faker.random.number(),
            name: 'Hairstyle',
          },
          {
            haiserviceID: faker.random.number(),
            name: 'Hairtreatments',
          }
        ],
        gender: 'Men',
        skill: 'Haircuts'
      },
      {
        id: 9,
        name: 'Macey\'s Nilsson',
        address: 'Jan Pieter Heijestraat 162, Amsterdam',
        zone: 'SOUTH',
        hairservice: [
          {
            haiserviceID: faker.random.number(),
            name: 'Haircuts',
          },
          {
            haiserviceID: faker.random.number(),
            name: 'Hairtreatments',
          },
        ],
        gender: 'Men',
        skill: 'Hairstyle'
      },
      {
        id: 10,
        name: 'Salon Forty Five',
        address: 'Maassluisstraat 101, 1062GA Amsterdam',
        zone: 'WEST',
        hairservice: [
          {
            haiserviceID: faker.random.number(),
            name: 'Haircuts',
          },
          {
            haiserviceID: faker.random.number(),
            name: 'Hairstyle',
          },
        ],
        gender: 'All',
        skill: 'Hairtreatments'
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
