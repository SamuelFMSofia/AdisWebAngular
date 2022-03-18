import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateRoutingModule } from './create-routing.module';
import { CreateComponent } from './create.component';

import { CreateService } from '../../services/Prioridad/create/create.service';
import { MATERIALModule } from '../../../MATERIAL/material.module';


@NgModule({
  declarations: [
    CreateComponent
  ],
  imports: [
    CommonModule,
    CreateRoutingModule,
    MATERIALModule,
  ],
  providers:[CreateService]
})
export class CreateModule { }
