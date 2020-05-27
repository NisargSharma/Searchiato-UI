import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private spinner: NgxSpinnerService, private router: Router) { }

  isLoggedIn(): void {
    console.log("checking token");
    if(localStorage.getItem("token")) {
      this.router.navigateByUrl('/search');
    } else {
      this.router.navigateByUrl('login');
    }
  }

  getStarted() {
    console.log("checking token");
    if(localStorage.getItem('token')) {
      this.router.navigateByUrl('/search');
    } else {
      this.router.navigateByUrl('signup');
    }
  }

  ngOnInit(): void {
    this.spinner.show();
    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 3000);
  }

}
