import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { CategoriesService } from '../../../providers/categories/CategoriesService';

@Component({
  selector: 'app-page-categories-home',
  templateUrl: './home.html',
  styleUrls: [ './home.scss' ],
  providers: [Location, {provide: LocationStrategy, useClass: PathLocationStrategy}]
})
export class PageCategoriesHome implements OnInit {
  
  public categories : Array<string>;

  constructor(
    private categoriesService: CategoriesService,
		public router: Router) {}

  ngOnInit(): void {
    this.categoriesService.getAllCategories()
    .then((categories: Array<string>) => {
      this.categories = categories;
    })
  }

  goToCategory(idCategory: string): void {    
			this.router.navigate([`category/${idCategory}`]);
  }

}
