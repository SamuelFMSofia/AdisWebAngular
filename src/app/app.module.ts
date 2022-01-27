import { MunidadtecnicaService } from './dashboard/services/unidadTecnica/Modify/munidadtecnica.service';
import { UnidadTecnicaService } from './dashboard/services/unidadTecnica/Create/unidad-tecnica.service';

import { MatIconModule } from '@angular/material/icon';
import { MpersonServiceService } from './dashboard/services/personas/mpersonService/mperson-service.service';
import { PasswordService } from './dashboard/services/password/password.service';
import { ListuoService } from './dashboard/services/usuarios/listuoService/listuo.service';
import { MatFormFieldControl, MatFormFieldModule } from '@angular/material/form-field';

import { FormBuilder, FormsModule, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ServicesService } from './websites/services/services.service';
import { CpersonServiceService }  from './dashboard/services/personas/cpersonService/cperson-service.service'


import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { WebsitesModule } from './websites/websites.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { MusersServiceService } from './dashboard/services/usuarios/musersService/musers-service.service';
import { ListpersonServiceService } from './dashboard/services/personas/listperson/listperson-service.service';
import { ListarusersService } from './dashboard/services/usuarios/listusers/listarusers.service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MATERIALModule } from './MATERIAL/material.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    WebsitesModule,
    DashboardModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatIconModule

  ],
  exports:[
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    WebsitesModule,
    DashboardModule,
    MATERIALModule
  ],

  providers: [ServicesService, CpersonServiceService, MusersServiceService,
    ListpersonServiceService, ListarusersService, ListuoService,PasswordService, MpersonServiceService,
  UnidadTecnicaService, MunidadtecnicaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
