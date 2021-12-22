import { HttpClientModule } from '@angular/common/http';
import { RegisterModule } from './../register/register.module';
import { HomeaComponent } from './../homea/homea.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ComponentsModule } from './../layoutAdmin/components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { BrowserModule } from '@angular/platform-browser';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import { FlexLayoutModule, FlexModule } from '@angular/flex-layout';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CrudService } from '../services/crud.service';




@NgModule({
  declarations: [
    LayoutComponent,
    HomeaComponent
  ],
  imports: [
    CommonModule,
   /*  BrowserAnimationsModule, */
    /* BrowserModule,
    */
    LayoutRoutingModule,
    ComponentsModule,
    MatSidenavModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    MatCardModule,
    FlexLayoutModule,
    FlexModule,
    MatFormFieldModule,

    HttpClientModule

  ],
  exports:[
    CommonModule,
    /*  BrowserAnimationsModule, */
     /* BrowserModule,
     */
     LayoutRoutingModule,
     ComponentsModule,
     MatSidenavModule,
     MatMenuModule,
     MatToolbarModule,
     MatIconModule,
     MatDividerModule,
     MatListModule,
     MatCardModule,
     FlexLayoutModule,
     FlexModule,
     MatFormFieldModule,

     HttpClientModule
  ],

  providers:[
    CrudService
  ],
  bootstrap:[
    LayoutComponent
  ]
})
export class LayoutModule { }
