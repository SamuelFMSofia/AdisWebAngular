import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UpdateRoutingModule } from './update-routing.module';
import { UpdateComponent } from './update.component';
import { MATERIALModule } from '../../../MATERIAL/material.module';
import { UpdateService } from '../../services/Prioridad/update/update.service';


@NgModule({
  declarations: [
    UpdateComponent
  ],
  imports: [
    CommonModule,
    UpdateRoutingModule,
    MATERIALModule
  ],
  providers:[
    UpdateService
  ]
})
export class UpdateModule { }
