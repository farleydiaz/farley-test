import { Injectable } from '@angular/core';
import { UserDta } from './UserDta';

@Injectable()
export class UserService {

  constructor(
    private userDta: UserDta
  ) {
  }

  public loginWithMail(email: string, password: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this.userDta.loginWithMail(email, password)
        .then(info  => {
          if (info != null) {
            resolve('/categories');
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

  public signOutUser(): Promise<any> {
		return new Promise((resolve, reject) => {
			this.userDta.signOutUser()
			.then((status: boolean) => {
				if(status){
					resolve(status);
				} else {
					throw("Error al cerrar sesion")
				}
			})
			.catch(err => reject(err));
		})
  }

}
