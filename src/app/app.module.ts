import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProvidersModule } from '../providers/providers.module';
import { RouterModule } from '@angular/router';
import { ComponentLayoutsBackModule } from '../components/layouts/back/back.module';
import { ComponentLayoutsFrontModule } from '../components/layouts/front/front.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from '../providers/http/AuthInterceptor';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ProvidersModule,
    RouterModule,
    ComponentLayoutsBackModule,
    ComponentLayoutsFrontModule,
    AppRoutingModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
