import { HeadersService } from "../services/headers.service";
import { Component, OnInit } from "@angular/core";
import Swal from 'sweetalert2';
import { FormGroup, FormControl, Validators, NgForm, FormGroupDirective } from "@angular/forms";
import { ErrorStateMatcher } from "@angular/material/core";
import { LoginSignupService } from "../services/login-signup.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  loginData: any;

  loginForm = new FormGroup({
    email: new FormControl("", [Validators.email, Validators.required]),
    password: new FormControl("", [Validators.minLength(6), Validators.required])
  });

  constructor(
    private lservice: LoginSignupService,
    private hservice: HeadersService,
    private router: Router
  ) {}

  login() {
    this.lservice.login(this.loginForm.value).subscribe(
      success => {
        console.log("form value: ", this.loginForm.value);
        console.log("success: ", success);

        this.loginData = success;
        if (this.loginData.token) {
          this.hservice.setHeaders(this.loginData.token);
          Swal.fire({
            title: 'Success!',
            text: 'Login Successful',
            icon: 'success',
            confirmButtonText: 'Okay'
          })
          this.router.navigateByUrl("/home");
        }
      },
      error => {
        Swal.fire({
          title: 'Error!',
          text: 'Login Unsuccessful',
          icon: 'error',
          confirmButtonText: 'Try Again',
        })
        console.log(error);
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
