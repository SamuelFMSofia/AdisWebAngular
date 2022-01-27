
import { PasswordModule } from '../password/password.module';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditperfilRoutingModule } from './editperfil-routing.module';
import { EditperfilComponent } from './editperfil.component';

import { MATERIALModule } from '../../../MATERIAL/material.module';


@NgModule({
  declarations: [
    EditperfilComponent
  ],
  imports: [
    CommonModule,
    EditperfilRoutingModule,
    PasswordModule,
    MATERIALModule
  ],
  exports:[
    EditperfilComponent
  ]
})
export class EditperfilModule { }
