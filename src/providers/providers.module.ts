

import { NgModule } from '@angular/core';
import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { UserDta } from './user/UserDta';
import { UserService } from './user/UserService';
import { AuthService } from './auth/AuthService';
import { SecurityGuard } from './auth/SecurityGuard';

@NgModule({
 imports: [
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
 ],
 providers: [
    AuthService,
    SecurityGuard,
    UserDta,
    UserService, 
  ]
})
export class ProvidersModule {}
