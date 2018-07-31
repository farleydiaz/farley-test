import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { Category } from '../../interfaces/Category';
import { CategoryComment } from '../../interfaces/CategoryComment';
import { map } from '../../../node_modules/rxjs/operators';

@Injectable()
export class CategoriesDta {
  constructor(private angularfirestore: AngularFirestore) {}

  public getAllCategories(): Observable<Category[]> {
		return this.angularfirestore.collection<Category>("categories", ref => ref.where("status", "==", 1).orderBy("date", "asc"))
			.snapshotChanges()
			.pipe(
				map(actions => 
					actions.map(a => {
						const data = a.payload.doc.data();
						const id = a.payload.doc.id;
						return { id, ...data };
					})
				)				
			);
  }

  public getCategory(idCategory: string): Observable<any> {
    return this.angularfirestore.doc<Category>(`categories/${idCategory}`).valueChanges();
	}
	
  public getCategoryOnce(idCategory: string): Promise<any> {
		return new Promise((resolve, reject) => {
			firebase.firestore()
			.collection("categories")
			.doc(idCategory)
			.get()
			.then(doc => resolve(doc.data()))
			.catch(err => reject(err));
		});
  }

  public createCategory(category: Category):  Promise<any> {
    return new Promise((resolve, reject) => {
      firebase.firestore()
      .collection("categories")
      .add(category)
      .then(data => resolve(data))
      .catch(err => reject(err)) 
    })
  }

  public getComments(idCategory: string): Observable<any> {
    return this.angularfirestore.collection<CategoryComment>(`categories/${idCategory}/comments`, ref => ref.orderBy("date", "asc")).valueChanges();
	}
	
	public deleteCategory(idCategory: string): Promise<any> {
		return new Promise((resolve, reject) => {
			firebase.firestore()
			.collection("categories")
			.doc(idCategory)
			.update({
				status: 0
			})
			.then(res => resolve(res))
			.catch(err => reject(err))
		})
	}
	public updateCategory(category: Category, idCategory: string): Promise<any> {
		return new Promise((resolve, reject) => {
			firebase.firestore()
			.collection("categories")
			.doc(idCategory)
			.update(category)
			.then(res => resolve(res))
			.catch(err => reject(err))
		})
	}

	

}
