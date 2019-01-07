import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Salon } from '../models/salon';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class SalonService {

  private salonsUrl = 'api/salons';

  constructor(private http: HttpClient) { }

  getSalons(): Observable<Salon[]> {
    return this.http.get<Salon[]>(this.salonsUrl);
  }

}
