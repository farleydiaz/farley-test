import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { UserService } from '../../../providers/user/UserService';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-page-user-login',
  templateUrl: './login.html',
  styleUrls: [ './login.scss' ],
  providers: [Location, {provide: LocationStrategy, useClass: PathLocationStrategy}]
})
export class PageUserLogin implements OnInit {
  loginForm: FormGroup;
  email: FormControl;
  password: FormControl;
  errorLogin: string;
  constructor(
    private userService: UserService,
    private location: Location,
    public router: Router
  ) {}

  ngOnInit(): void {
    this.errorLogin = null;
    this.createFormControls();
    this.createForm();
  }

  createFormControls() {
    this.email = new FormControl('', [
      Validators.required,
      Validators.pattern('[^ @]*@[^ @]*')
    ]);
    this.password = new FormControl('', [
      Validators.required,
    ]);
  }

  createForm() {
    this.loginForm = new FormGroup({
      email: this.email,
      password: this.password,
    });
  }

  public login(infoLogin: { email: string, password: string}) {
    this.userService.loginWithMail( infoLogin.email, infoLogin.password )
    .then((url: string) => {
      if (url != null) {
        this.router.navigate([url]);
      }
    })
    .catch((res) => {
      this.errorLogin = res;
    });
  }
}
