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

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.css"]
})
export class SignupComponent implements OnInit {
  constructor(
    private http: HttpClient,
    private lservice: LoginSignupService,
    private router: Router
  ) {}
  
  signupForm = new FormGroup({
    name: new FormControl("", [Validators.pattern(/^[A-Za-z]+$/), Validators.minLength(4),Validators.required]),
    email: new FormControl("", [Validators.email, Validators.required]),
    password: new FormControl("", [Validators.minLength(6),Validators.required]),
    // cpassword: new FormControl('', [Validators.minLength(6), Validators.required]),
  });

  signup() {
    this.lservice.signup(this.signupForm.value).subscribe(
      success => {
        console.log(this.signupForm.value);
        console.log(success);
        Swal.fire({
          title: 'Success!',
          text: 'SignUp Successful',
          icon: 'success',
          confirmButtonText: 'Okay'
        })
        this.router.navigateByUrl("/login");
      },
      error => {
        console.log(error);
        Swal.fire({
          title: 'Error!',
          text: 'SignUp Unsuccessful',
          icon: 'error',
          confirmButtonText: 'Try Again'
        })
      }
    );
  }

  ngOnInit(): void {}
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
