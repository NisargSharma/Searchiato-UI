import {FormGroup,
  FormControl,
  Validators,
  NgForm,
  FormGroupDirective} from '@angular/forms';
import { SearchService } from './../search.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ErrorStateMatcher } from "@angular/material/core";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private sservice: SearchService, private router: Router) { }
  
  panelOpenState: boolean;

  firstCard: any = [
    {
      data: {
        name: "Nihar",
        email: "nihar@gmail.com",
      }
    },
    {
      data: {
        name: "Nihar",
        email: "nihar@gmail.com",
      },
    },
    {
      data: {
        name: "Nihar",
        email: "nihar@gmail.com",
      }
    },
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

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    const isSubmitted = form && form.submitted;
    return !!(
      control &&
      control.invalid &&
      (control.dirty || control.touched || isSubmitted)
    );
  }

  matcher = new MyErrorStateMatcher();
}
