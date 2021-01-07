import { environment } from './../../../environments/environment.prod';
import { HttpClient, HttpClientModule, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class DriverInfoService {

  apiUrl = environment.apiUrl;
  imageUrl = 'https://localhost:44393/Image/';

  constructor(private http: HttpClient) { }


  getData() : Observable<any[]> {
    return this.http.get<any>(this.apiUrl + '/DriverInfoes');
  }

  addData(val: any){
    return this.http.post(this.apiUrl + '/DriverInfoes', val, {observe: 'response'});
  }

  updateData(val: any){
    return this.http.put(this.apiUrl + '/DriverInfoes', val, {observe: 'response'});
  }

  deleteData(val: any){
    return this.http.delete(this.apiUrl + '/DriverInfoes/' + val);
  }

  uploadImage(val: any){
    return this.http.post(this.apiUrl + '/DriverInfoes/SaveFile', val);
  }
}
