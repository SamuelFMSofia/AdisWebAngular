import { ListService } from './../../services/Prioridad/list/list.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListRoutingModule } from './list-routing.module';
import { ListComponent } from './list.component';
import { MATERIALModule } from '../../../MATERIAL/material.module';


@NgModule({
  declarations: [
    ListComponent
  ],
  imports: [
    CommonModule,
    ListRoutingModule,
    MATERIALModule
  ],
  providers:[
    ListService
  ]
})
export class ListModule { }
