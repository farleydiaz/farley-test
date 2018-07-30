import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { PageCategories } from './categories';
import { MatCardModule } from '@angular/material/card';

const routes: Routes = [
  { path: '', component: PageCategories }
];

@NgModule({
  declarations: [
    PageCategories,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    MatCardModule,
  ],
  exports: [
    PageCategories
  ]
})
export class PageCategoriesModule {}
