import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageCategories } from './categories';
import { CategoryCardModule } from '../../components/categories/card/card.module';

const routes: Routes = [
  { path: '', component: PageCategories }
];

@NgModule({
  declarations: [
    PageCategories,
  ],
  imports: [
    CommonModule,
		RouterModule.forChild(routes),
		CategoryCardModule
  ],
  exports: [
    PageCategories
  ]
})
export class PageCategoriesModule {}
