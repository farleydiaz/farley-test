import { Component, EventEmitter, Output, Input, OnInit } from '@angular/core';
import { CategoriesService } from '../../../providers/categories/CategoriesService';
import { Category } from '../../../interfaces/Category';
import { Observable } from 'rxjs';
import { Router } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'category-card',
  templateUrl: './card.html',
  styleUrls: ['./card.scss']
})
export class CategoryCard implements OnInit {
  public category$: Observable<Category>;
  @Input() idCategory: string;
  @Output() selectCategory = new EventEmitter();
  constructor(
		private categoriesService: CategoriesService,
		public router: Router) { }


  public ngOnInit(){
    this.category$ = this.categoriesService.getCategory(this.idCategory);
  }

  public goToCategory(){
    this.selectCategory.emit(this.idCategory);
	} 
	
	public deleteCategory(){
		this.categoriesService.deleteCategory(this.idCategory);
	}

}
