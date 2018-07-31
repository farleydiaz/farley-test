import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-page-categories-home',
  templateUrl: './viewCategory.html',
  styleUrls: [ './viewCategory.scss' ],
  providers: [Location, {provide: LocationStrategy, useClass: PathLocationStrategy}]
})
export class PageCategoriesViewCategory implements OnInit, OnDestroy {
  private paramSubscription: Subscription;
  public categoryId: string;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.paramSubscription = this.route.params.subscribe(params => {
      this.categoryId = params['categoryId'];
    });
  }

  ngOnDestroy() {
    this.paramSubscription.unsubscribe();
  }
}
