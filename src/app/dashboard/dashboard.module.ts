
import { MunidadtecnicaService } from './services/unidadTecnica/Modify/munidadtecnica.service';
import { MusersServiceService } from './services/usuarios/musersService/musers-service.service';
import { CpersonServiceService } from './services/personas/cpersonService/cperson-service.service';
import { ListuoService } from './services/usuarios/listuoService/listuo.service';
import { ListpersonServiceService } from './services/personas/listperson/listperson-service.service';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { ShareddashModule } from './shareddash/shareddash.module';

import { ModifypersonModule } from './persona/modifyperson/modifyperson.module';

import { ModifyusersModule } from './usuario/modifyusers/modifyusers.module';

import { ListpersonModule } from './persona/listperson/listperson.module';

import { UnidadTecnicaService } from './services/unidadTecnica/Create/unidad-tecnica.service';
import { CreatepersonModule } from './persona/createperson/createperson.module';
import { MATERIALModule } from '../MATERIAL/material.module';
import { ModificarSubtipoService } from './services/subTipoOT/modificar/modificar-subtipo.service';
import { ModifyService } from './services/tipoOT/modify/modify.service';



@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ListpersonModule,
    ShareddashModule,
    ModifypersonModule,
    ModifyusersModule,
    CreatepersonModule,
    MATERIALModule

  ],

  providers:[
    ListpersonServiceService,ListuoService, CpersonServiceService,MusersServiceService, UnidadTecnicaService,
    MunidadtecnicaService,
    ModificarSubtipoService,
    ModifyService
  ]

})
export class DashboardModule { }
