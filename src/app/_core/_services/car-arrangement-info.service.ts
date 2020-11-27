import { environment } from './../../../environments/environment.prod';
import { PaginatedResult } from './../_models/pagination';
import { HttpClient, HttpClientModule, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';




//import http client, observable from rxjs


@Injectable({
  providedIn: 'root'
})
export class CarArrangementInfoService {

  // 宣告api url
  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  //宣告方法

  getData():Observable<any[]>{
    return this.http.get<any>(this.apiUrl + '/ArrangementInfoes');
  }

  // getData(page?, itemsPerPage?):Observable<PaginatedResult<any[]>>{
  //   const paginatedResult: PaginatedResult<any[]> = new PaginatedResult<any[]>();

  //   let params = new HttpParams();


  //   if (page != null && itemsPerPage != null) {
  //     params = params.append('pageNumber', page);
  //     params = params.append('pageSize', itemsPerPage);
  //   }

  //   let url = this.apiUrl + '/ArrangementInfoes';

  //   return this.http.post<any>(url, {observe: 'response', params})
  //   .pipe(
  //     map(response => {
  //       paginatedResult.result = response.body;
  //       if (response.headers.get('Pagination') != null) {
  //         paginatedResult.pagination = JSON.parse(response.headers.get('Pagination'));
  //       }
  //       return paginatedResult;
  //     })
  //   );
  // }
}
