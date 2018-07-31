import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageCategoriesHome } from './home';
import { CategoryCardModule } from '../../../components/categories/card/card.module';

const routes: Routes = [
  { path: '', component: PageCategoriesHome }
];

@NgModule({
  declarations: [
    PageCategoriesHome,
  ],
  imports: [
    CommonModule,
		RouterModule.forChild(routes),
		CategoryCardModule
  ],
  exports: [
    PageCategoriesHome
  ]
})
export class PageCategoriesHomeModule {}
