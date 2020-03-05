import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginSignupService {

  constructor(private http: HttpClient) { }

  signup(obj) {
    return this.http.post(environment.baseurl + '/signup', obj);
  }

  login(obj) {
    return this.http.post(environment.baseurl + '/login', obj);
  }

  logout() {  
  }

}
