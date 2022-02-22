import { MATERIALModule } from './../../../MATERIAL/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrearSubtipoRoutingModule } from './crear-subtipo-routing.module';
import { CrearSubtipoComponent } from './crear-subtipo.component';


@NgModule({
  declarations: [
    CrearSubtipoComponent
  ],
  imports: [
    CommonModule,
    CrearSubtipoRoutingModule,
    MATERIALModule
  ]
})
export class CrearSubtipoModule { }
