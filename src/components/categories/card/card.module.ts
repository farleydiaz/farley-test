import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { CategoryCard } from './card';
import { 
	MatIconModule,
	MatCardModule, 
	MatMenuModule 
} from '@angular/material';
import { RouterModule } from '../../../../node_modules/@angular/router';


@NgModule({
  declarations: [
    CategoryCard,
  ],
  imports: [
    CommonModule,
    MatIconModule,
		MatCardModule,
		MatMenuModule,
		MatIconModule,
		RouterModule
  ],
  exports: [
    CategoryCard,
  ]
})
export class CategoryCardModule {}
