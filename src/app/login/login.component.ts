import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  signinFormModel = {
    email: '',
    password: ''
  }
  constructor() { }

  ngOnInit(): void {
  }
  loginSubmit(loginVal: any) {
    console.log(loginVal);
  }
}
