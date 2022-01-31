import { MATERIALModule } from './../../../MATERIAL/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModificarTipoRoutingModule } from './modificar-tipo-routing.module';
import { ModificarTipoComponent } from './modificar-tipo.component';




@NgModule({
  declarations: [
    ModificarTipoComponent
  ],
  imports: [
    CommonModule,
    ModificarTipoRoutingModule,
    MATERIALModule

  ],
  exports:[
    ModificarTipoComponent
  ]
})
export class ModificarTipoModule { }
