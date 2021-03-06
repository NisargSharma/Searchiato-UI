import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ContactService } from "../services/contact.service";
import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators, NgForm, FormGroupDirective } from "@angular/forms";
import { ErrorStateMatcher } from "@angular/material/core";
import Swal from 'sweetalert2';

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.css"]
})
export class ContactComponent implements OnInit {
  constructor(private cservice: ContactService, private spinner: NgxSpinnerService, private router: Router) {}

  contactForm = new FormGroup({
    name: new FormControl("", [
      Validators.pattern(/^[A-Za-z]+$/),
      Validators.required,
      Validators.minLength(4)
    ]),
    email: new FormControl("", [Validators.required, Validators.email]),
    message: new FormControl("", [
      Validators.required,
      Validators.minLength(10)
    ])
  });

  contact() {
    this.cservice.contact(this.contactForm.value).subscribe(
      success => {
        this.contactForm.reset();
        Swal.fire({
          title: 'Success!',
          text: "We'll get back to you in some time",
          icon: 'success',
          confirmButtonText: 'Okay'
        })
      },
      error => {
        console.log(error);
        Swal.fire({
          title: 'Error!',
          text: 'Something went wrong!',
          icon: 'error',
          confirmButtonText: 'Try Again'
        })
      }
    );
  }

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

/* Error when invalid control is dirty, touched, or submitted. */
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
