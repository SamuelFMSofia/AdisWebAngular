import { DashboardComponent } from './dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'',
  component: DashboardComponent,
  children:[
    {
      path:'modifyperson',
      loadChildren:()=> import('./modify/modifyperson/modifyperson.module').then(p=>p.ModifypersonModule)
    },
    {
      path:'modifyusers',
      loadChildren:()=> import('./modify/modifyusers/modifyusers.module').then(u=>u.ModifyusersModule)
    },
    {
      path:'createperson',
      loadChildren:()=> import('./create/createperson/createperson.module').then(c=>c.CreatepersonModule)
    },
    {
      path:'listperson',
      loadChildren:()=> import('./create/listperson/listperson.module').then(l=>l.ListpersonModule)
    },
    {
      path:'editperfil',
      loadChildren:()=> import('./modify/editperfil/editperfil.module').then(e=>e.EditperfilModule)
    },
    {
      path:'listusers',
      loadChildren:()=> import('./create/listusers/listusers.module').then(lu=>lu.ListusersModule)
    } ,
    {
      path:'listuo',
      loadChildren:()=> import('./listUO/list-uo.module').then(li=>li.ListUOModule)
    },
    {
      path:'unidadTecnica',
      loadChildren:()=> import('./unidadtecnica/listar/unidadtecnica.module').then(ut=>ut.UnidadtecnicaModule)
    },
    {
      path:'modifyUnidadTecnica',
      loadChildren:()=> import('./modify/modify-technicalUnit/technicalunit.module').then(mt=>mt.TechnicalunitModule)
    },
    {
      path:'createunidadtecnica',
      loadChildren:()=> import('./unidadtecnica/create/create.module').then(mt=>mt.CreateModule)
    },
    {
      path:'**',
      redirectTo:'listperson'
    }

  ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
