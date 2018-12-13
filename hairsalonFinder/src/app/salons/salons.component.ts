import { Component, OnInit } from '@angular/core';
import { Salon } from '../models/salon';
import { Observable } from 'rxjs';
import { HttpService } from '../services/http.service';
import Hairservice from '../models/hairService';

@Component({
  selector: 'app-salons',
  templateUrl: './salons.component.html',
  styleUrls: ['./salons.component.scss']
})
export class SalonsComponent implements OnInit {

  salons: Observable<Salon[]>;

  services: Hairservice[] = [
    { id: 0, name: 'Haircut' },
    { id: 1, name: 'Hairstyle' },
    { id: 2, name: 'Hairtreatment' }
  ];

  constructor(private httpService: HttpService) {
  }

  ngOnInit() {
    this.salons = this.httpService.getSalons();
  }
}
