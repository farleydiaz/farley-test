import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent } from '@angular/common/http';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { from } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private afAuth: AngularFireAuth) {}

  public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return this.afAuth.authState
     .pipe(
      switchMap(user => {
        if (user) {
          return from(user.getIdToken())
          .pipe(
            switchMap((token) => {
              return next.handle(req.clone({
                setHeaders: {
                  Authorization: token
                }
              }));
            })
          );
        } else {
          return next.handle(req);
        }
      })
    );
  }
}
