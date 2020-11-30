import { environment } from './../../../environments/environment.prod';
import { PaginatedResult } from './../_models/pagination';
import { HttpClient, HttpClientModule, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class DriverInfoService {

  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }


  getData() : Observable<any[]> {
    return this.http.get<any>(this.apiUrl + '/DriverInfoes');
  }
}
