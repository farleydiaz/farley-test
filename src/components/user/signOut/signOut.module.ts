import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { SignOut } from './signOut';
import { MatIconModule } from '@angular/material';


@NgModule({
  declarations: [
    SignOut,
  ],
  imports: [
    CommonModule,
    MatIconModule,
  ],
  exports: [
    SignOut,
  ]
})
export class SignOutModule {}
