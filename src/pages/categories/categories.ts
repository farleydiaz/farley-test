import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { UserService } from '../../providers/user/UserService';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-page-categories',
  templateUrl: './categories.html',
  styleUrls: [ './categories.scss' ],
  providers: [Location, {provide: LocationStrategy, useClass: PathLocationStrategy}]
})
export class PageCategories implements OnInit {
  
  public categories : number[];

  constructor() {
    this.categories = [1,1,1,1,1,1,1,1,2,1,23123,21,31,2,22,,222,2,2,2,2,2];
  }

  ngOnInit(): void {
  }

}
