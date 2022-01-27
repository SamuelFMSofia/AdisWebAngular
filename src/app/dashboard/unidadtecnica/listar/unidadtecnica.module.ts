
import { CreateModule } from './../create/create.module';
import { TechnicalunitModule } from '../modify-technicalUnit/technicalunit.module';

import { UnidatecnicaComponent } from './unidatecnica.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UnidadtecnicaRoutingModule } from './unidadtecnica-routing.module';

import { MATERIALModule } from '../../../MATERIAL/material.module';




@NgModule({
  declarations: [UnidatecnicaComponent],
  imports: [
    CommonModule,
    UnidadtecnicaRoutingModule,
    TechnicalunitModule,
    CreateModule,
    MATERIALModule

  ],
  entryComponents:[
    TechnicalunitModule
  ],
  exports:[
    UnidatecnicaComponent
  ]

})
export class UnidadtecnicaModule { }
