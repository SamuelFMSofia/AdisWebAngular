
import { CreatepersonModule } from './../createperson/createperson.module';
import { ModifyusersModule } from '../../usuario/modifyusers/modifyusers.module';
import { ModifypersonModule } from '../modifyperson/modifyperson.module';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListpersonRoutingModule } from './listperson-routing.module';
import { ListpersonComponent } from './listperson.component';
import { MATERIALModule } from '../../../MATERIAL/material.module';


@NgModule({
  declarations: [
    ListpersonComponent
  ],
  imports: [
    CommonModule,
    ListpersonRoutingModule,
    ModifypersonModule,
    CreatepersonModule,
    ModifyusersModule,
    MATERIALModule

  ],

  entryComponents:[

    ModifyusersModule
  ],
  exports:[
    ListpersonComponent
  ]
})
export class ListpersonModule { }
