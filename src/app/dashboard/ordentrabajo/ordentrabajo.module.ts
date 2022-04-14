import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MATERIALModule } from '../../MATERIAL/material.module';

import { OrdentrabajoRoutingModule } from './ordentrabajo-routing.module';
import { ListarOTComponent } from './listar-ot/listar-ot.component';
import { CrearOTComponent } from './crear-ot/crear-ot.component';
import { DetalleOTComponent } from './detalle-ot/detalle-ot.component';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { DragDropFileDirective } from 'src/app/utils/directives/drag-drop-file.directive';


@NgModule({
  declarations: [
    ListarOTComponent,
    CrearOTComponent,
    DetalleOTComponent,
    DragDropFileDirective
  ],
  imports: [
    CommonModule,
    OrdentrabajoRoutingModule,
    MATERIALModule
  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'en-GB' }
  ]
})
export class OrdentrabajoModule { }
