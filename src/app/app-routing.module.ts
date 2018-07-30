import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentLayoutsBack } from '../components/layouts/back/back';
import { ComponentLayoutsFront } from '../components/layouts/front/front';
import { SecurityGuard } from '../providers/auth/SecurityGuard';


const FRONTROUTES: Routes = [
    {
      path: 'login',
      loadChildren: '../pages/login/login.module#PageUserLoginModule',
    },
];
const BACKROUTES: Routes = [
    {
      path: 'categories',
      loadChildren: '../pages/categories/categories.module#PageCategoriesModule',
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
