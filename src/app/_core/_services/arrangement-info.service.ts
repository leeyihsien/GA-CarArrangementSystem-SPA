import { environment } from '../../../environments/environment.prod';
import { PaginatedResult } from '../_models/pagination';
import { HttpClient, HttpClientModule, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';




//import http client, observable from rxjs


@Injectable({
  providedIn: 'root'
})
export class ArrangementInfoService {

  // 宣告api url
  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  //宣告方法

  getData():Observable<any[]>{
    return this.http.get<any>(this.apiUrl + '/ArrangementInfoes');
  }

  getByDate(val: any):Observable<any[]>{
    return this.http.get<any>(this.apiUrl + '/ArrangementInfoes/searchdate/' + val);
  }

  getByDateAndId(val1: any,val2:any):Observable<any[]>{
    return this.http.get<any>(this.apiUrl + '/ArrangementInfoes/PassengerSearch/' + val1 + '/' + val2);
  }

  getByDateAndRoute(val1: any,val2:any):Observable<any[]>{
    return this.http.get<any>(this.apiUrl + '/ArrangementInfoes/ManagerSearch/' + val1 + '/' + val2);
  }

  getByDateAndCar(val1: any,val2:any):Observable<any[]>{
    return this.http.get<any>(this.apiUrl + '/ArrangementInfoes/DriverSearch/' + val1 + '/' + val2);
  }


  addData(val: any){
    return this.http.post(this.apiUrl + '/ArrangementInfoes', val, {observe: 'response'});
  }

  updateData(val: any){
    return this.http.put(this.apiUrl + '/ArrangementInfoes', val, {observe: 'response'});
  }

  deleteData(val: any){
    return this.http.delete(this.apiUrl + '/ArrangementInfoes/' + val);
  }

  getNullStatus():Observable<any[]>{
    return this.http.get<any>(this.apiUrl + '/ArrangementInfoes/status');

  }
}
