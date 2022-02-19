

import { PasswordModule } from '../password/password.module';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditperfilRoutingModule } from './editperfil-routing.module';
import { EditperfilComponent } from './editperfil.component';

import { MATERIALModule } from '../../../MATERIAL/material.module';
import { EmailModule } from '../email/email.module';
import { EditPersonPerfilModule } from '../editPersonPerfil/edit-person-perfil.module';


@NgModule({
  declarations: [
    EditperfilComponent
  ],
  imports: [
    CommonModule,
    EditperfilRoutingModule,
    PasswordModule,
    EmailModule,
    EditPersonPerfilModule,
    MATERIALModule
  ],
  exports:[
    EditperfilComponent
  ],
  providers:[]
})
export class EditperfilModule { }
