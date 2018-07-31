import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentLayoutsBack } from '../components/layouts/back/back';
import { ComponentLayoutsFront } from '../components/layouts/front/front';
import { SecurityGuard } from '../providers/auth/SecurityGuard';


const FRONTROUTES: Routes = [
    {
      path: 'login',
      loadChildren: '../pages/users/login/login.module#PageUserLoginModule',
    },
];
const BACKROUTES: Routes = [
    {
      path: 'categories',
      loadChildren: '../pages/categories/home/home.module#PageCategoriesHomeModule',
      canActivate: [SecurityGuard],
      data: {
        expectedRole: ['admin']
      }
    },
    {
      path: 'categories/form/:categoryId',
      loadChildren: '../pages/categories/form/form.module#PageCategoriesFormModule',
      canActivate: [SecurityGuard],
      data: {
        expectedRole: ['admin']
      }
    },
    {
      path: 'categories/form',
      loadChildren: '../pages/categories/form/form.module#PageCategoriesFormModule',
      canActivate: [SecurityGuard],
      data: {
        expectedRole: ['admin']
      }
    },
    {
      path: 'category/:categoryId',
      loadChildren: '../pages/categories/viewCategory/viewCategory.module#PageCategoriesViewCategoryModule',
      canActivate: [SecurityGuard],
      data: {
        expectedRole: ['admin']
      }
    }
];

const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: '', component: ComponentLayoutsFront, children: FRONTROUTES },
    { path: '', component: ComponentLayoutsBack, children: BACKROUTES },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [ RouterModule]
})
export class AppRoutingModule {}
