import { environment } from './../../environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class SearchService {
  headers = new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': "Bearer " + localStorage.getItem("token")
  });
      
  constructor(private http: HttpClient) {
    console.log(this.headers);
  }

  getDataByName(obj: any) {    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': "Bearer " + localStorage.getItem("token"),
      })
    };
    return this.http.post(environment.baseurl + "/search/?name="+ obj.query, {}, httpOptions);
  }

  getDataByEmail(obj: any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': "Bearer " + localStorage.getItem("token"),
      })
    };
    return this.http.post(environment.baseurl + "/search/?email="+ obj.query, {}, httpOptions);
  }
}
