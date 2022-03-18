
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateRoutingModule } from './create-routing.module';
import { CreateComponent } from './create.component';
import { MATERIALModule } from '../../../MATERIAL/material.module';



@NgModule({
  declarations: [
    CreateComponent
    
  /*   DragableColumnDirective */
  ],
  imports: [
    CommonModule,
    CreateRoutingModule,
    MATERIALModule,
  ]
})
export class CreateModule { }
