
import { ModifypersonModule } from '../../persona/modifyperson/modifyperson.module';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListusersRoutingModule } from './listusers-routing.module';
import { ListusersComponent } from './listusers.component';

import { MATERIALModule } from '../../../MATERIAL/material.module';


@NgModule({
  declarations: [
    ListusersComponent
  ],
  imports: [
    CommonModule,
    ListusersRoutingModule,
    ModifypersonModule,
   MATERIALModule

  ],
  entryComponents:[

    ModifypersonModule
  ],

  exports:[
    ListusersComponent
  ]
})
export class ListusersModule { }
