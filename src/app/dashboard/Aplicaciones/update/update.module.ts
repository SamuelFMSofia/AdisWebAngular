import { MATERIALModule } from './../../../MATERIAL/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UpdateRoutingModule } from './update-routing.module';
import { UpdateComponent } from './update.component';
import { ToolbarTitleFormModule } from '../toolbar-title-form/toolbar-title-form.module';



@NgModule({
  declarations: [
    UpdateComponent
  ],
  imports: [
    CommonModule,
    UpdateRoutingModule,
    MATERIALModule,
    ToolbarTitleFormModule
  ]
})
export class UpdateModule { }
