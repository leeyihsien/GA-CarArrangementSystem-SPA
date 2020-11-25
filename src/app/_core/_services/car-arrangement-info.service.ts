import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

//import http client, observable from rxjs


@Injectable({
  providedIn: 'root'
})
export class CarArrangementInfoService {

  // 宣告api url
  readonly apiUrl = 'https://localhost:44393/api';

  constructor(private http: HttpClient) { }

  //宣告方法

  getData(){
    return this.http.get<any[]>(this.apiUrl + '/ArrangementInfoes', {});
  }
}
