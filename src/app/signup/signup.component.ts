import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm = new FormGroup({
    name: new FormControl([Validators.minLength(4), Validators.required]),
    email: new FormControl([Validators.email, Validators.required]),
    password: new FormControl([Validators.minLength(4), Validators.required]),
    cpasword: new FormControl([Validators.minLength(4), Validators.required]),
  });

  signup() {
    console.log(this.signupForm.value);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
