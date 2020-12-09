import { carInfo } from './../_models/carInfo';
import { environment } from './../../../environments/environment.prod';
import { PaginatedResult } from './../_models/pagination';
import { HttpClient, HttpClientModule, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CarInfoService {

  apiUrl = environment.apiUrl;

  carInfo : carInfo = {
    carId : "",
    carBrand : "",
    carOwner : "",
    carPassengerVolume : 0
  }

  constructor(private http: HttpClient) { }

  getData():Observable<any[]> {
    return this.http.get<any>(this.apiUrl + '/CarInfoes');
  }


  addData(val: any){
    return this.http.post(this.apiUrl + '/CarInfoes', val, {observe: 'response'});
  }

  updateData(val: any){
    return this.http.put(this.apiUrl + '/CarInfoes', val,{observe: 'response'});
  }

  deleteData(val: any){
    return this.http.delete(this.apiUrl + '/CarInfoes/' + val);
  }
}
