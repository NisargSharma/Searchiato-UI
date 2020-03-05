import { HeadersService } from './../headers.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm, FormGroupDirective } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { LoginSignupService } from './../login-signup.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginData: any;

  loginForm = new FormGroup({
    
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [Validators.minLength(6), Validators.required]),
  });

  constructor(private lservice: LoginSignupService, private hservice: HeadersService, private router: Router) { }

  login() {
    this.lservice.login(this.loginForm.value).subscribe(success => {
      console.log(this.loginForm.value);
      console.log(success);

      this.loginData = success;
      if (this.loginData.token) {
        this.hservice.setHeaders(this.loginData.token);
        this.router.navigateByUrl('/home');
      }
    },
    error => {
      console.log(error);
    });
  }

  logout() {
    console.log("Clearing headers");
    localStorage.removeItem("token");
    console.log("logged out");
  }
  ngOnInit(): void {
  }

}

/* Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }

  matcher = new MyErrorStateMatcher();
}
