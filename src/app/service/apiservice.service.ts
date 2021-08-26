import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ApiserviceService {

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get('/assets/mocks/login.json');
  }

  getTable() {
    return this.http.get('/assets/mocks/strategy.json');
  }
}