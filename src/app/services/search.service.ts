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

  search() {
    console.log("Calling search")
    console.log("Token:", localStorage.getItem("token"));
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': "Bearer " + localStorage.getItem("token"),
      })
    };
    return this.http.post("https://mini-project-sbjain.herokuapp.com/api/search", httpOptions);
  }

  getDataByName(name: any) {
    let params1 = new HttpParams().set("name", name);
    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': "Bearer " + localStorage.getItem("token"),
      })
    };
    console.log("token: ", localStorage.getItem('token'))
    return this.http.post(environment.baseurl + "/search/?name="+ name, httpOptions);
  }

  getDataByEmail(email: any) {
    let params1 = new HttpParams().set("email", email);
    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': "Bearer " + localStorage.getItem("token"),
      })
    };
    console.log("token: ", localStorage.getItem('token'))
    return this.http.post(environment.baseurl + "/search/?email="+ email, httpOptions);
  }
}
