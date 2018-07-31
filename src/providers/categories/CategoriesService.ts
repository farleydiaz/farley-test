import { Category } from './../../interfaces/Category';
import { Injectable } from '@angular/core';
import { CategoriesDta } from './CategoriesDta';
import { Observable } from 'rxjs';

@Injectable()
export class CategoriesService {

  constructor(private categoriesDta: CategoriesDta) {
  }

  public getAllCategories(): Observable<Category[]> {
      return this.categoriesDta.getAllCategories()
  }

  public getCategory(idCategory: string): Observable<any> {
    return this.categoriesDta.getCategory(idCategory);
	}

  public getCategoryOnce(idCategory: string): Promise<any> {
    return this.categoriesDta.getCategoryOnce(idCategory);
	}	

  public createCategory(category: Category): Promise<any>{
    return this.categoriesDta.createCategory(category);
  }

  public getComments(idCategory: string): Observable<any> {
    return this.categoriesDta.getComments(idCategory);
	}
	
	public deleteCategory(idCategory: string): Promise<any>{
		return new Promise((resolve, reject) => {
			this.categoriesDta.deleteCategory(idCategory)			
			.then(res => resolve(res))
			.catch(err => reject(err))
		})
	}

	public updateCategory(category: Category, idCategory: string): Promise<any>{
		return new Promise((resolve, reject) => {
			this.categoriesDta.updateCategory(category, idCategory)			
			.then(res => resolve(res))
			.catch(err => reject(err))
		})
	}

	
}
