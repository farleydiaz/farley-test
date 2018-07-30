import { NgModule } from '@angular/core';
import { ComponentLayoutsBack } from './back';
import { SignOutModule } from '../../user/signOut/signOut.module';
import { CommonModule } from '@angular/common';
import { 
  MatIconModule, 
  MatMenuModule, 
  MatSidenavModule, 
  MatToolbarModule, 
  MatListModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    ComponentLayoutsBack,
  ],
  imports: [
    MatIconModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    CommonModule,
    SignOutModule,
    RouterModule,
  ],
  exports: [
    ComponentLayoutsBack,
  ]
})
export class ComponentLayoutsBackModule {}
