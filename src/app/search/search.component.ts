import { FormGroup, FormControl, Validators, NgForm,FormGroupDirective } from '@angular/forms';
import { SearchService } from '../services/search.service';
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
  searchData: any;

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


  searchForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    query: new FormControl('', [Validators.required]),
  });

  searchByName() {
    console.log("form data: ", this.searchForm.value.name);
    this.sservice.getDataByName(this.searchForm.value.name).subscribe((success: any) => {
      this.searchData = success;
      console.log("success: ", success)
    },
    (error: any) => {
      console.log("error msg:", error);
    });
  }

  searchByEmail() {
    console.log("form data: ", this.searchForm.value.email);
    this.sservice.getDataByName(this.searchForm.value.email).subscribe((success: any) => {
      this.searchData = success;
      console.log("success: ", success)
    },
    (error: any) => {
      console.log("error msg:", error);
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
