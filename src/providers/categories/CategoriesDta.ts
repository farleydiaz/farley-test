import { AngularFireAuth } from 'angularfire2/auth';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { QuerySnapshot } from '@firebase/firestore-types';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { Category } from '../../interfaces/Category';
import { CategoryComment } from '../../interfaces/CategoryComment';

@Injectable()
export class CategoriesDta {
  constructor(private angularfirestore: AngularFirestore) {}

  public getAllCategories(): Promise<any> {
    return new Promise((resolve, reject) => {
      firebase.firestore()
      .collection("categories")
      .where("status", "==", 1)
      .orderBy("date", "asc")
      .get()
      .then((categories: QuerySnapshot) => {        
        resolve(categories);
      })
      .catch((error) => reject(error));
    });
  }

  public getCategory(idCategory: string): Observable<any> {
    return this.angularfirestore.doc<Category>(`categories/${idCategory}`).valueChanges();
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

}
