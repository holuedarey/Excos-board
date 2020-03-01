import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { Endpoint } from '../common/endpoints';
import { map } from 'rxjs/operators';
import { excoRequestModel } from '../_models/request/excos';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http:HttpClient) { }

  getExcos() : Observable<any>{
    console.log('url :', `${Endpoint.DASHBOARD.excos}`);
    
    return this.http.get(`${Endpoint.DASHBOARD.excos}`).pipe(
      map(data => {
        return data;
      }))
  }


  addExcos(excoRequest: excoRequestModel): Observable<any> {
    return this.http.post(Endpoint.DASHBOARD.excos, excoRequest,
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }).pipe(
        map(data => {
          return data;
        }));
  }
}
