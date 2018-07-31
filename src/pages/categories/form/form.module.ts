import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageCategoriesForm } from './form';
import { MatCardModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: PageCategoriesForm }
];

@NgModule({
  declarations: [
    PageCategoriesForm,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),    
		MatCardModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    PageCategoriesForm
  ]
})
export class PageCategoriesFormModule {}
