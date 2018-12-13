import { Component, OnInit, Input } from '@angular/core';
import { Salon } from '../models/salon';

@Component({
  selector: 'app-salons-list',
  templateUrl: './salons-list.component.html',
  styleUrls: ['./salons-list.component.scss']
})
export class SalonsListComponent implements OnInit {

  @Input()
  salons: Salon[] = [];
  constructor() { }

  ngOnInit() {
  }

}
