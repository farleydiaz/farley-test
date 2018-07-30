import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentLayoutsFront } from './front';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    ComponentLayoutsFront,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    ComponentLayoutsFront,
  ]
})
export class ComponentLayoutsFrontModule {}
