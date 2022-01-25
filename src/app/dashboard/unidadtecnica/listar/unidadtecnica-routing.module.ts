import { UnidatecnicaComponent } from './unidatecnica.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    component: UnidatecnicaComponent,
    children:[
      {
        path:'modifyUnidadTecnica',
        loadChildren:()=>import('../../modify/modify-technicalUnit/technicalunit.module').then(m=>m.TechnicalunitModule)
      },
      {
        path:'createunidadtecnica',
        loadChildren:()=>import('../create/create.module').then(m=>m.CreateModule)
      }
    ] 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UnidadtecnicaRoutingModule { }
