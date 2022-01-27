
import { CreateComponent } from './create.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { CreateRoutingModule } from './create-routing.module';
import { MATERIALModule } from '../../../MATERIAL/material.module';



@NgModule({
  declarations: [
    CreateComponent
  ],
  imports: [
    CommonModule,
    CreateRoutingModule,
   MATERIALModule
  ]
})
export class CreateModule { }
