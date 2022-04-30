
import { CreateComponent } from './create.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { CreateRoutingModule } from './create-routing.module';
import { MATERIALModule } from '../../../MATERIAL/material.module';
import { ToastrModule } from 'ngx-toastr';



@NgModule({
  declarations: [
    CreateComponent
  ],
  imports: [
    CommonModule,
    CreateRoutingModule,
   MATERIALModule,
   ToastrModule
  ]
})
export class CreateModule { }
