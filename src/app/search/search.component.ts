import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SearchService } from './../search.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private sservice: SearchService, private router: Router) { }
  
  panelOpenState: boolean;

  firstCard: any = [
    { "val": "name 1" },
    { "val": "name 2" },
    { "val": "name 3" },
    { "val": "name 4" }
  ];

  secondCard: any = [
    { "val": "social 1" },
    { "val": "social 2" },
    { "val": "social 3" },
    { "val": "social 4" }
  ];

  thirdCard: any = [
    { "val": "profile 1" },
    { "val": "profile 2" },
    { "val": "profile 3" },
    { "val": "profile 4" }
  ];

  fourthCard: any = [
    { "val": "email 1" },
    { "val": "email 2" },
    { "val": "email 3" },
    { "val": "email 4" }
  ];

  options: any = [
    { value: 'name', viewValue: "Name" },
    { value: 'email', viewValue: "Email" },
  ];

  searchForm = new FormGroup({
    category: new FormControl('', [Validators.required]),
    query: new FormControl('', [Validators.required]),
  });

  search() {
    this.sservice.search().subscribe(success => {
      console.log(this.searchForm.value);
      console.log(success);
    },
    error => {
      console.log(error);
      this.router.navigateByUrl("/login");                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               this.router.navigateByUrl("/login");
    });
  }

  logout() {
    console.log("Clearing token");
    localStorage.removeItem("token");
    console.log("Logged out");
  }
  
  ngOnInit(): void {
  }
                                                                                                                                                                                                                                                                                                                                                                  
}                                                                                                                                                                                                          
