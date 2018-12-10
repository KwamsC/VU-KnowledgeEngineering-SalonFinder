import { Component, OnInit } from '@angular/core';
import { Salon } from '../models/salon';

@Component({
  selector: 'app-salons',
  templateUrl: './salons.component.html',
  styleUrls: ['./salons.component.scss']
})
export class SalonsComponent implements OnInit {


  salona: Salon = {
    id: 1,
    name: 'Ambrosia',
  };

  salonb: Salon = {
    id: 2,
    name: 'Copacabana Beauty and Hair Clinic',
  };

  salonc: Salon = {
    id: 1,
    name: 'Copacabana Beauty and Hair Clinic',
  };


  constructor() { }

  ngOnInit() {
  }

}
