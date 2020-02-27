import { environment } from './../environments/environment.prod';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class SearchService {
  headers = new HttpHeaders();
  
  constructor(private http: HttpClient) {
    this.headers.set("Authorization", "Bearer " + localStorage.getItem("token"));
  }

  search() {
    return this.http.post(environment.baseurl + "/search", { headers: this.headers });
  }

}
