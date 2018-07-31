import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { CategoriesService } from '../../../providers/categories/CategoriesService';
import { Validators, FormControl, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Category } from '../../../interfaces/Category';

@Component({
  selector: 'app-page-categories-home',
  templateUrl: './form.html',
  styleUrls: [ './form.scss' ],
  providers: [Location, {provide: LocationStrategy, useClass: PathLocationStrategy}]
})
export class PageCategoriesForm implements OnInit, OnDestroy {
  private paramSubscription: Subscription;
  public formCategory: FormGroup;
  private categoryId: string;

  constructor(
    private categoriesService: CategoriesService, 
    private route: ActivatedRoute,  
		public router: Router) {
    this.categoryId = null;
  }

  ngOnInit(): void {
    this.createForm();
    this.paramSubscription = this.route.params.subscribe(params => {
      this.categoryId = params['categoryId'];
    });
  }
  
  createForm(): void {
    this.formCategory = new FormGroup({
      'title': new FormControl("", Validators.required),
      'description': new FormControl("", Validators.required)
    });
  }

  sendForm(): void{
    if (this.formCategory.valid) {
      if(this.categoryId !== null){
        const category: Category = {
          commentsCount: 0,
          date: new Date(),
          description: this.formCategory.controls['description'].value,
          title: this.formCategory.controls['title'].value,
          userName: "Farley Diaz",
          status: 1
        }
        this.categoriesService.createCategory(category)
        .then(() => {
		  	  this.router.navigate(['categories']);
        })
      };
    }
  }

  ngOnDestroy() {
    this.paramSubscription.unsubscribe();
  }

}
