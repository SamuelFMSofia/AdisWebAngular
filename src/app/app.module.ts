
import { FormBuilder, FormsModule, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ServicesService } from './websites/services/services.service';
import { CpersonServiceService }  from './dashboard/services/cpersonService/cperson-service.service'


import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { WebsitesModule } from './websites/websites.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { MusersServiceService } from './dashboard/services/musersService/musers-service.service';
import { ListpersonServiceService } from './dashboard/services/listperson/listperson-service.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    WebsitesModule,
    DashboardModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FormsModule


  ],
  exports:[

  ],

  providers: [ServicesService, CpersonServiceService, MusersServiceService,
    ListpersonServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
