import { LoginSignupService } from "../services/login-signup.service";
import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormControl,
  Validators,
  NgForm,
  FormGroupDirective
} from "@angular/forms";
import { ErrorStateMatcher } from "@angular/material/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import Swal from 'sweetalert2';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.css"]
})
export class SignupComponent implements OnInit {
  constructor(
    private http: HttpClient,
    private lservice: LoginSignupService,
    private router: Router,
    private spinner: NgxSpinnerService,
  ) {}
  
  signupForm = new FormGroup({
    name: new FormControl("", [Validators.pattern(/^[A-Za-z]+$/), Validators.minLength(4),Validators.required]),
    email: new FormControl("", [Validators.email, Validators.required]),
    password: new FormControl("", [Validators.minLength(6),Validators.required]),
    // cpassword: new FormControl('', [Validators.minLength(6), Validators.required]),
  });

  signup() {
    this.spinner.show();
    this.lservice.signup(this.signupForm.value).subscribe(
      success => {
        this.spinner.hide();
        Swal.fire({
          title: 'Success!',
          text: 'Sign up Successful',
          icon: 'success',
          confirmButtonText: 'Okay'
        })
        this.router.navigateByUrl("/login");
      },
      error => {
        console.log(error);
        this.spinner.hide();
        Swal.fire({
          title: 'Error!',
          text: 'SignUp Unsuccessful',
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
