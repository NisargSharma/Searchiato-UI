import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class HeadersService {

  constructor() { }
  obj: any = {};

  setHeaders(token) {
    console.log('Setting headers');
    localStorage.setItem('token', token);
  }

  getHeaders() {
    this.obj.token = localStorage.getItem('token');
    return this.obj;
  }

  clearHeaders() {
    console.log('Clearing headers');
    localStorage.setItem('token', null);
  }
}
