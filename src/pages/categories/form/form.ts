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
  public categoryId: string;

  constructor(
    private categoriesService: CategoriesService, 
    private route: ActivatedRoute,  
		public router: Router) {
    this.categoryId = null;
  }

  ngOnInit(): void {
    this.createForm();
    this.paramSubscription = this.route.params.subscribe(params => {
			if(params['categoryId']){
				this.categoryId = params['categoryId'];
				this.categoriesService.getCategoryOnce(this.categoryId)
				.then((data: Category) => {
					this.formCategory.controls['description'].setValue(data.description);
					this.formCategory.controls['title'].setValue(data.title);
				})
			}
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
			const category: Category = {
				description: this.formCategory.controls['description'].value,
				title: this.formCategory.controls['title'].value,
			}

			let promiseSendForm: Promise<any>;
      if(this.categoryId !== null){
				category.commentsCount = 0;
				category.date = new Date();
				category.userName = "Farley Diaz";
				category.status = 1;
        promiseSendForm = this.categoriesService.createCategory(category)
			} else {
        promiseSendForm = this.categoriesService.updateCategory(category, this.categoryId)
			}

			promiseSendForm
			.then(() => {
				this.router.navigate(['categories']);
			})
    }
  }

  ngOnDestroy() {
    this.paramSubscription.unsubscribe();
  }

}
