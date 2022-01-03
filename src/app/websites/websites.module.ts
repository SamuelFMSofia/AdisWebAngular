import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { LoginModule } from './login/login.module';
import { ServicesService } from './services/services.service';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebsitesRoutingModule } from './websites-routing.module';
import { WebsitesComponent } from './websites.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [
    WebsitesComponent
  ],
  imports: [
    CommonModule,

    WebsitesRoutingModule,
    SharedModule,
    MatSidenavModule,
    LoginModule,
    HttpClientModule,
    MatIconModule


  ],
  providers: [ServicesService]

})
export class WebsitesModule { }
