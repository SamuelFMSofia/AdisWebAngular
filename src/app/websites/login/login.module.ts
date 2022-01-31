import { ServicesService } from './../services/services.service';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';

import { MATERIALModule } from '../../MATERIAL/material.module';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    MATERIALModule
  ],

  providers: [ServicesService]
})
export class LoginModule { }
