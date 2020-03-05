import { HttpClient, HttpHeaders } from '@angular/common/http';
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
    // console.log("Bearer " + localStorage.getItem("token"))
    let str = localStorage.getItem("token");
    // console.log(str);
    // console.log("a" + str);
    // this.headers.set("authorization", "Bearer " + localStorage.getItem("token"));
    console.log(this.headers);
  }

  search() {
    // return this.http.post(environment.baseurl + "/search", {"data":"asdsdf"},{ headers: this.headers });
    console.log("Calling search")
    // console.log(this.headers.getAll)
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': "Bearer " + localStorage.getItem("token"),
        "gandhar":"custom header"
      })
    };
    return this.http.post("https://mini-project-sbjain.herokuapp.com/api/search", {"data":"asdsdf"}, httpOptions);
  }

}
