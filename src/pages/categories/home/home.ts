import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { CategoriesService } from '../../../providers/categories/CategoriesService';
import { Observable } from '../../../../node_modules/rxjs';
import { Category } from '../../../interfaces/Category';

@Component({
  selector: 'app-page-categories-home',
  templateUrl: './home.html',
  styleUrls: [ './home.scss' ],
  providers: [Location, {provide: LocationStrategy, useClass: PathLocationStrategy}]
})
export class PageCategoriesHome implements OnInit {
  
  public categories$ : Observable<Category[]>;

  constructor(
    private categoriesService: CategoriesService,
		public router: Router) {}

  ngOnInit(): void {
    this.categories$ = this.categoriesService.getAllCategories();
  }

  goToCategory(idCategory: string): void {    
			this.router.navigate([`category/${idCategory}`]);
  }

}
