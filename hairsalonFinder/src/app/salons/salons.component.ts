import { Component, OnInit } from '@angular/core';
import { Salon } from '../models/salon';
import { Observable } from 'rxjs';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-salons',
  templateUrl: './salons.component.html',
  styleUrls: ['./salons.component.scss']
})
export class SalonsComponent implements OnInit {

  // salons: Observable<Salon[]>;

  // constructor(private httpService: HttpService) { }


  salons: Salon[] = [
    { id: 1, name: 'Ambrosia' },
    { id: 2, name: 'Copacabana Beauty and Hair Clinic' },
    { id: 3, name: 'Bombasto' },
    { id: 4, name: 'Celeritas' },
    { id: 5, name: 'Magneta' },
    { id: 6, name: 'RubberMan' },
    { id: 7, name: 'Dynama' },
    { id: 8, name: 'Dr IQ' },
    { id: 9, name: 'Magma' },
    { id: 10, name: 'Tornado' }
  ];

  ngOnInit() {
    // this.salons = this.httpService.getSalons();
  }
}
