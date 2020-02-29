import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormsModule, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  submitted: boolean;
  loginForm: FormGroup;
  users: any = [];
  userInfo: any;
  authSuccess: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private _Router: Router,
    private _HttpClient: HttpClient
  ) { }

  ngOnInit() {
    this._HttpClient.get("assets/usersDB.json").subscribe(data => {
      let Data: any = data;
      this.users = Data.usersDB;
    })
    this.loginForm = this.formBuilder.group({
      userid: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  get f() {
    return this.loginForm.controls;
  }

  checkValidUser() {
    let key = 'authStatus';
    this.users.forEach(e => {
      if (e.userid === this.f.userid.value && e.password === this.f.password.value) {
        this.authSuccess = true;
        sessionStorage.setItem(key, "success");
      } else sessionStorage.setItem(key, "fails");

    });
  }
  submit() {
    this.submitted = true;
    if (this.submitted && this.f.userid.value && this.f.password.value) {
      this.checkValidUser();
      if (this.authSuccess) {
        this._Router.navigateByUrl("/gallery");
      }
    }
  }

}