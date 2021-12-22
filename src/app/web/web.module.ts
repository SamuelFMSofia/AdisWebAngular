import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { NgModule } from '@angular/core';


import { WebRoutingModule } from './web-routing.module';
import { WebComponent } from './web.component';
import { SharedModule } from '../shared/components/shared.module';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [
    WebComponent
  ],
  imports: [
    CommonModule,
    WebRoutingModule,
    SharedModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    BrowserModule
   
  ],
  exports:[
    WebComponent,
    CommonModule,
    WebRoutingModule,
    SharedModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    BrowserModule

  ]
})
export class WebModule { }
