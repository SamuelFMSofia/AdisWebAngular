import { CrearTipoComponent } from './../../tiposOT/crear/crear-tipo.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path:'',
  component: CrearTipoComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrearSubtipoRoutingModule { }
