
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PasswordRoutingModule } from './password-routing.module';
import { PasswordComponent } from './password.component';

import { MATERIALModule } from '../../../MATERIAL/material.module';


@NgModule({
  declarations: [
    PasswordComponent
  ],
  imports: [
    CommonModule,
    PasswordRoutingModule,
    MATERIALModule

  ],
  exports:[
    PasswordComponent
  ]
})
export class PasswordModule { }
