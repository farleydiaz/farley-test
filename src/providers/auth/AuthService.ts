import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore } from 'angularfire2/firestore';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { User } from '../../interfaces/User';

@Injectable()
export class AuthService {

    public user$: Observable<User>;
    public token = '';

    constructor(
        private afAuth: AngularFireAuth,
        private afs: AngularFirestore,
    ) {
        this.user$ = this.afAuth.authState
        .pipe(
            switchMap(user => {
                if (user) {
                    return  this.afs.doc(`users/${user.uid}`).valueChanges();
                } else {
                    return of(null);
                }
            })
        );
    }

    public canRead(user: User, expectedRoles: string[]): boolean {
        let allowAcces: boolean = false;
        for (const role of expectedRoles) {
            if (user.roles[role]) {
                allowAcces = true;
                break;
            }
        }
        return allowAcces;
    }

    public getAuthorizationToken(): any {
        this.afAuth.authState.forEach((token: any) => {
            if (token !== null) {
                this.token = token.qa;
            }
        });
        return this.token;
    }

    public validateDataUserLogin(dataUser: any): Observable<any> {
        const query = this.afs.collection(`users`, ref => ref.where('email', '==',
        dataUser.email).where('status', '==', 1));
        const items = query.snapshotChanges();
        return items;
    }
}
