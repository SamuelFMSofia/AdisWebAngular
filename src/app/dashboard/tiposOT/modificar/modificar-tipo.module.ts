import { MATERIALModule } from './../../../MATERIAL/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModificarTipoRoutingModule } from './modificar-tipo-routing.module';
import { ModificarTipoComponent } from './modificar-tipo.component';
import { CreateService } from '../../services/tipoOT/create/create.service';
import { ModifyService } from '../../services/tipoOT/modify/modify.service';
import { UnidadTecnicaService } from '../../services/unidadTecnica/Create/unidad-tecnica.service';
import { ListarusersService } from '../../services/usuarios/listusers/listarusers.service';




@NgModule({
  declarations: [
    ModificarTipoComponent
  ],
  imports: [
    CommonModule,
    ModificarTipoRoutingModule,
    MATERIALModule

  ],
  exports:[
    ModificarTipoComponent
  ],
  providers:[CreateService,ModifyService,UnidadTecnicaService,ListarusersService]
})
export class ModificarTipoModule { }
