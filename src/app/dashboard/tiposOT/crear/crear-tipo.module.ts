import { MATERIALModule } from './../../../MATERIAL/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrearTipoRoutingModule } from './crear-tipo-routing.module';
import { CrearTipoComponent } from './crear-tipo.component';


@NgModule({
  declarations: [
    CrearTipoComponent
  ],
  imports: [
    CommonModule,
    CrearTipoRoutingModule,
    MATERIALModule
  ]
})
export class CrearTipoModule { }
