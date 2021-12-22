import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from './layout/layout.module';
import { WebModule } from './web/web.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormRComponent } from './form/form-r/form-r.component';



@NgModule({
  declarations: [
    AppComponent,
    FormRComponent,

  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    WebModule,
    LayoutModule,
    HttpClientModule

   ],
   exports:[
     CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    WebModule,
    LayoutModule
   ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
