import { Injectable } from '@angular/core';
import { UserDta } from './UserDta';
import { Observable, combineLatest } from 'rxjs';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';

@Injectable()
export class UserService {

  constructor(
    private userDta: UserDta,
    public router: Router
  ) {
  }

  public loginWithMail(email: string, password: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this.userDta.loginWithMail(email, password)
        .then(info  => {
          if (info != null) {
            resolve('/users/home');
          }
        })
        .catch(error => {
          let message: string;
          if (!error.status) {
            const codeError = error.error.code;
            if (codeError === 'auth/wrong-password' || codeError === 'auth/invalid-email' || codeError === 'auth/user-not-found') {
              message = 'Usuario o contraseña incorrectos';
            } else {
              message = 'Servicio no disponible, intentelo de nuevo';
            }
          } else {
            message = 'Servicio no disponible, intentelo de nuevo';
          }
          reject(message);
        });
    });
  }

  public signOutUser(): void {
    this.userDta.signOutUser().then((status: boolean) => {
      this.router.navigate(['users/login']);
    })
    .catch(() => {
      console.error('Error al cerrar sesion');
    });
  }

}
