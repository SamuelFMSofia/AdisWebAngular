import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateRoutingModule } from './create-routing.module';
import { CreateComponent } from './create.component';
import { MATERIALModule } from '../../../MATERIAL/material.module';
import { CreateService } from '../../services/Complejidad/create/create.service';


@NgModule({
  declarations: [
    CreateComponent
  ],
  imports: [
    CommonModule,
    CreateRoutingModule,
    MATERIALModule
  ],
  providers:[
    CreateService
  ]
})
export class CreateModule { }
