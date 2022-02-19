import { MATERIALModule } from './../../../MATERIAL/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditPersonPerfilRoutingModule } from './edit-person-perfil-routing.module';
import { EditPersonPerfilComponent } from './edit-person-perfil.component';



@NgModule({
  declarations: [
    EditPersonPerfilComponent
  ],
  imports: [
    CommonModule,
    EditPersonPerfilRoutingModule,
    MATERIALModule
  ],
  exports:[
    EditPersonPerfilComponent
  ]
})
export class EditPersonPerfilModule { }
