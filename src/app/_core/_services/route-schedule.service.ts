import { carInfo } from './../_models/carInfo';
import { environment } from './../../../environments/environment.prod';
import { HttpClient, HttpClientModule, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RouteScheduleService {

  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getData():Observable<any[]>{
    return this.http.get<any>(this.apiUrl + '/RouteSchedules');
  }

  addData(val:any){
    return this.http.post(this.apiUrl + '/RouteSchedules', val, {observe: 'response'});
  }


  updateData(val: any){
    return this.http.put(this.apiUrl + '/RouteSchedules', val,{observe: 'response'});
  }

  deleteData(val: any){
    return this.http.delete(this.apiUrl + '/RouteSchedules/' + val);
  }
}
