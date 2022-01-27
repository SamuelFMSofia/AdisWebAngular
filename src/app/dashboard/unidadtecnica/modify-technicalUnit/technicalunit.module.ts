
import { PasswordModule } from '../../persona/password/password.module';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TechnicalunitRoutingModule } from './technicalunit-routing.module';
import { TechnicalunitComponent } from './technicalunit.component';
import { MATERIALModule } from '../../../MATERIAL/material.module';




@NgModule({
  declarations: [
    TechnicalunitComponent
  ],
  imports: [
    CommonModule,
    TechnicalunitRoutingModule,
    PasswordModule,
    MATERIALModule   

  ],
  exports:[
    TechnicalunitComponent
  ]
})
export class TechnicalunitModule { }
