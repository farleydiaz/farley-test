import { Component, Input, OnInit } from '@angular/core';
import { CategoriesService } from '../../../providers/categories/CategoriesService';
import { Observable } from '../../../../node_modules/rxjs';
import { CategoryComment } from '../../../interfaces/CategoryComment';

@Component({
  selector: 'categories-comments-list',
  templateUrl: './commentsList.html',
  styleUrls: ['./commentsList.scss']
})
export class CategoryCommentsList implements OnInit {
  @Input() idCategory: string;
  public comments: Observable<CategoryComment>
  constructor(private categoriesService: CategoriesService) { } 


  public ngOnInit() {
    this.comments = this.categoriesService.getComments(this.idCategory);
  }

  public timeToDate(time){
   return time.seconds * 1000;
  }


}
