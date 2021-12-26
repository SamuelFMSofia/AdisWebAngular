import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SidenavListComponent } from './sidenav-list/sidenav-list.component';

import { FlexLayoutModule, FlexModule } from '@angular/flex-layout';
import { MatIconModule }  from '@angular/material/icon';
import { MatToolbarModule} from '@angular/material/toolbar';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';


@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    SidenavListComponent
  ],
  imports: [
    CommonModule,

   FlexModule,
   FlexLayoutModule,
   MatIconModule,
   MatToolbarModule,
   MatSidenavModule,
   MatListModule,
   RouterModule
   
  ],
  exports:[
    FooterComponent,
    HeaderComponent,
    SidenavListComponent
  ]
})
export class SharedModule { }
