import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarOTComponent } from './listar-ot/listar-ot.component';
import { CrearOTComponent } from './crear-ot/crear-ot.component';
import { DetalleOTComponent } from './detalle-ot/detalle-ot.component';

const routes: Routes = [
  {
    path:'lista',
    component: ListarOTComponent
  },
  {
    path:'crear',
    component: CrearOTComponent
  },
  {
    path:'detalle',
    component: DetalleOTComponent
  },
  {
    path:'**',
    redirectTo:'lista'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdentrabajoRoutingModule { }
