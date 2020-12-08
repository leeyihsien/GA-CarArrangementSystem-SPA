import { environment } from './../../../environments/environment.prod';
import { PaginatedResult } from './../_models/pagination';
import { HttpClient, HttpClientModule, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class RouteInfoService {

  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getData() : Observable<any[]> {
    return this.http.get<any>(this.apiUrl + '/RouteInfoes');
  }

  addData(val: any){
    return this.http.post(this.apiUrl + '/RouteInfoes', val, {observe: 'response'});
  }

  updateData(val: any){
    return this.http.put(this.apiUrl + '/RouteInfoes', val,{observe: 'response'});
  }

  deleteData(val: any){
    return this.http.delete(this.apiUrl + '/RouteInfoes/' + val);
  }

  getType(val: any) : Observable<any[]> {
    return this.http.get<any>(this.apiUrl + '/RouteInfoes/type/'+ val);
  }


}
