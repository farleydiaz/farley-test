import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { CategoryCard } from './card';
import { 
	MatIconModule,
	MatCardModule, 
	MatMenuModule 
} from '@angular/material';


@NgModule({
  declarations: [
    CategoryCard,
  ],
  imports: [
    CommonModule,
    MatIconModule,
		MatCardModule,
		MatMenuModule,
		MatIconModule
  ],
  exports: [
    CategoryCard,
  ]
})
export class CategoryCardModule {}
