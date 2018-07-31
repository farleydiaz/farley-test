import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageCategoriesViewCategory } from './viewCategory';
import { CategoryCardModule } from '../../../components/categories/card/card.module';
import { CategoryCommentsListModule } from '../../../components/categories/commentsList/commentsList.module';

const routes: Routes = [
  { path: '', component: PageCategoriesViewCategory }
];

@NgModule({
  declarations: [
    PageCategoriesViewCategory,
  ],
  imports: [
    CommonModule,
		RouterModule.forChild(routes),
    CategoryCommentsListModule,
    CategoryCardModule,
  ],
  exports: [
    PageCategoriesViewCategory
  ]
})
export class PageCategoriesViewCategoryModule {}
