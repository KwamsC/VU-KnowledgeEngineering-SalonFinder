import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Salon } from '../models/salon';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getSalons(): Observable<Salon[]> {
    return this.http
      .get<Salon[]>('api/salons');
  }
}
