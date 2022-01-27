
import { LoginModule } from './login/login.module';
import { ServicesService } from './services/services.service';

import { SharedModule } from './shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebsitesRoutingModule } from './websites-routing.module';
import { WebsitesComponent } from './websites.component';

import { MATERIALModule } from '../MATERIAL/material.module';



@NgModule({
  declarations: [
    WebsitesComponent
  ],
  imports: [
    CommonModule,
    WebsitesRoutingModule,
    LoginModule,
    SharedModule,
    MATERIALModule
  ],
  providers: [ServicesService]

})
export class WebsitesModule { }
