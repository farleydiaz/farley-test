import { Component, EventEmitter, Output, Input, OnInit } from '@angular/core';
import { CategoriesService } from '../../../providers/categories/CategoriesService';
import { Category } from '../../../interfaces/Category';
import { Observable } from 'rxjs';

@Component({
  selector: 'category-card',
  templateUrl: './card.html',
  styleUrls: ['./card.scss']
})
export class CategoryCard implements OnInit {
  public category: Observable<Category>;
  @Input() idCategory: string;
  @Output() selectCategory = new EventEmitter();
  constructor(private categoriesService: CategoriesService) { }


  public ngOnInit() {
    this.category = this.categoriesService.getCategory(this.idCategory);
  }

  public goToCategory() {
    this.selectCategory.emit(this.idCategory);
  } 

}
