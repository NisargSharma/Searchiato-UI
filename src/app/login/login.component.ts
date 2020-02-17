import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl([Validators.email, Validators.required]),
    password: new FormControl([Validators.minLength(6), Validators.required]),
  });

  login() {
    console.log(this.loginForm.value);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
