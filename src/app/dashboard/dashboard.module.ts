
import { MunidadtecnicaService } from './services/unidadTecnica/Modify/munidadtecnica.service';
import { MusersServiceService } from './services/usuarios/musersService/musers-service.service';
import { CpersonServiceService } from './services/personas/cpersonService/cperson-service.service';
import { ListuoService } from './services/usuarios/listuoService/listuo.service';
import { ListpersonServiceService } from './services/personas/listperson/listperson-service.service';
import { RouterModule } from '@angular/router';
import { FormBuilder, FormsModule, ReactiveFormsModule, FormGroup } from '@angular/forms';

import { MatFormFieldModule, MatFormFieldControl } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { ShareddashModule } from './shareddash/shareddash.module';
import { MatMenuModule } from '@angular/material/menu';
import { FlexLayoutModule, FlexModule } from '@angular/flex-layout';
import { HttpClientModule, HttpClientXsrfModule } from '@angular/common/http';
import { ModifypersonModule } from './persona/modifyperson/modifyperson.module';

import { ModifyusersModule } from './usuario/modifyusers/modifyusers.module';

import { ListpersonModule } from './persona/listperson/listperson.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { UnidadTecnicaService } from './services/unidadTecnica/Create/unidad-tecnica.service';
import { CreatepersonModule } from './persona/createperson/createperson.module';
import { MATERIALModule } from '../MATERIAL/material.module';
import { OrdentrabajoModule } from './ordentrabajo/ordentrabajo.module';



@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    OrdentrabajoModule,
    ListpersonModule,
    ShareddashModule,
    ModifypersonModule,
    ModifyusersModule,
    CreatepersonModule,
    MATERIALModule

  ],
  
  providers:[
    ListpersonServiceService,ListuoService, CpersonServiceService,MusersServiceService, UnidadTecnicaService,
    MunidadtecnicaService
  ]

})
export class DashboardModule { }
