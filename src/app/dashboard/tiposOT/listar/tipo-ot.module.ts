import { TipoOTComponent } from './tipo-ot.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TipoOTRoutingModule } from './tipo-ot-routing.module';
import { MATERIALModule } from '../../../MATERIAL/material.module';


@NgModule({
  declarations: [TipoOTComponent],
  imports: [
    CommonModule,
    TipoOTRoutingModule,
    MATERIALModule
  ]
})
export class TipoOTModule { }
