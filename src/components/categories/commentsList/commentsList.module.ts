import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material';
import { CategoryCommentsList } from './commentsList';


@NgModule({
  declarations: [
    CategoryCommentsList,
  ],
  imports: [
    CommonModule,
    MatListModule,
  ],
  exports: [
    CategoryCommentsList,
  ]
})
export class CategoryCommentsListModule {}
