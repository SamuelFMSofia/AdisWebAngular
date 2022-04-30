import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubTipoRoutingModule } from './sub-tipo-routing.module';
import { SubTipoComponent } from './sub-tipo.component';
import { MATERIALModule } from '../../../MATERIAL/material.module';


@NgModule({
  declarations: [
    SubTipoComponent
  ],
  imports: [
    CommonModule,
    SubTipoRoutingModule,
    MATERIALModule
  ]
})
export class SubTipoModule { }
