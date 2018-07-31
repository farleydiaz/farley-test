import { Injectable } from '@angular/core';
import { CategoriesDta } from './CategoriesDta';
import { Observable } from 'rxjs';
import { Category } from '../../interfaces/Category';

@Injectable()
export class CategoriesService {

  constructor(
    private categoriesDta: CategoriesDta
  ) {
  }

  public getAllCategories(): Promise<Array<string>> {
    return new Promise((resolve, reject) => {
      this.categoriesDta.getAllCategories()
      .then((categories) => {
        const categoriesArray: Array<string> = [];
        categories.forEach((category) => {
          categoriesArray.push(category.id);
        });
        resolve(categoriesArray);
      })
      .catch(err => reject(err));
    });
  }

  public getCategory(idCategory: string): Observable<any> {
    return this.categoriesDta.getCategory(idCategory);
  }

  public createCategory(category: Category): Promise<any>{
    return this.categoriesDta.createCategory(category);
  }

  public getComments(idCategory: string): Observable<any> {
    return this.categoriesDta.getComments(idCategory);
  }
}
