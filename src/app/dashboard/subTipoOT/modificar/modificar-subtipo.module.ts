import { ModificarSubtipoComponent } from './modificar-subtipo.component';

import { MATERIALModule } from './../../../MATERIAL/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModificarSubtipoRoutingModule } from './modificar-subtipo-routing.module';



@NgModule({
  declarations: [
    ModificarSubtipoComponent
  ],
  imports: [
    CommonModule,
    ModificarSubtipoRoutingModule,
    MATERIALModule
  ]
})
export class ModificarSubtipoModule { }
