import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private spinner: NgxSpinnerService, private router: Router) { }

  isLoggedIn() {
    console.log("checking token");
    if(localStorage.getItem('token')) {
      this.router.navigateByUrl('/search');
    } else {
      this.router.navigateByUrl('/login');
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
