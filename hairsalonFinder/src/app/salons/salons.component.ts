import { Component, OnInit } from '@angular/core';
import { Salon } from '../models/salon';
import { Observable, Subject } from 'rxjs';
import {map, tap, withLatestFrom, filter} from 'rxjs/operators';
import { HttpService } from '../services/http.service';
import Hairservice from '../models/hairService';
import {Request} from '../models/request';
import { SalonService } from '../services/salon.service';

export class Gender {
  id: number;
  type: string;
}

export class Zone {
  id: number;
  location: string;
}

@Component({
  selector: 'app-salons',
  templateUrl: './salons.component.html',
  styleUrls: ['./salons.component.scss']
})
export class SalonsComponent implements OnInit {

  salons: Observable<Salon[]>;
  filteredSalons: Salon[];
  inputrequest: Request;
  selectedService: string;
  selectedGender: string;
  selectedZone: string;
  requested = new Subject<any>();

  services: Hairservice[] = [
    { id: 0, name: 'Haircut' },
    { id: 1, name: 'Hairstyle' },
    { id: 2, name: 'Hairtreatment' }
  ];

  zones: Zone[] = [
    { id: 0, location: 'NORTH' },
    { id: 1, location: 'WEST' },
    { id: 2, location: 'SOUTH' },
    { id: 3, location: 'EAST'}
  ];

  genders: Gender[] = [
    { id: 0, type: 'Men' },
    { id: 1, type: 'Women' },
  ];

  constructor(private httpService: HttpService, salonService: SalonService) {
  }

  onSubmit() {
    this.inputrequest = new Request();
    this.inputrequest.gender = this.selectedGender;
    this.inputrequest.pref_hairservice = this.selectedService;
    this.inputrequest.pref_zone = this.selectedZone;
   this.requested.next(this.inputrequest);
  }

  getfilteredSalons(inputrequest) {
    this.salons.pipe(map((salon: any) => salon.gender === inputrequest.gender), tap(console.log));

    // .map(projects => projects.filter(proj => proj.name === name));
    // return this.salons.filter(salon => salon.skill === value.);
  }

  ngOnInit() {
    this.salons = this.httpService.getSalons();
    // tslint:disable-next-line:max-line-length tslint:disable-next-line:no-debugger
    this.requested.pipe(withLatestFrom(this.salons), tap(console.log), map(([request, salons]: any) =>
    salons.filter( salon => salon.gender === request.gender)))
    .subscribe(console.log);
  }

  // requestSalons() {
  //   // const storeId = 1;
  //   // this.salonFilteredList = this.salons.filter((salon: Salon) => salon.id === storeId);
  //   // this.salons = this.salonFilteredList;
  // }

}
