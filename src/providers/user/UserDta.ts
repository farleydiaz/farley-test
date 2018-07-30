import { AngularFireAuth } from 'angularfire2/auth';
import { Injectable } from '@angular/core';

@Injectable()
export class UserDta {
  constructor(
    private firebaseAuth: AngularFireAuth
  ) {}

  public loginWithMail(email: string, password: string): Promise<any> {
    return new Promise((resolve, reject) => {
      const info: any = {uId: null, token: null };
      this.firebaseAuth.auth.signInWithEmailAndPassword(email, password)
      .then((data: any) => {
        info.uId = data.uid;
        info.token = data.qa;
        resolve(info);
      })
      .catch(error => reject({error , status: false}));
    });
  }

  public signOutUser(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.firebaseAuth.auth.signOut().then(() => {
        resolve(true);
      })
      .catch((error) => {
        reject(false);
      });
    });
  }
}
