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
  p: number = 1;
  
  searchForm = new FormGroup({
    category: new FormControl('', [Validators.required]),
    query: new FormControl('', [Validators.required]),
  });

  search() {
    console.log("form data: ", this.searchForm.value);
    if(this.searchForm.value.category == 'name') {
      this.sservice.getDataByName(this.searchForm.value).subscribe((success: any) => {
        this.searchData = success.data;
        console.log("success: ", success)
        console.log("searchData", this.searchData);
      },
      (error: any) => {
        console.log("error msg:", error);
      });
    } else {
      this.sservice.getDataByEmail(this.searchForm.value).subscribe((success: any) => {
        this.searchData = success.data;
        console.log("success: ", success)
      },
      (error: any) => {
        console.log("error msg:", error);
      });
    }
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
