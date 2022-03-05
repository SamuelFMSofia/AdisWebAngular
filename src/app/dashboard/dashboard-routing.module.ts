import { DashboardComponent } from './dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'',
  component: DashboardComponent,
  children:[
    {
      path:'modifyperson',
      loadChildren:()=> import('./persona/modifyperson/modifyperson.module').then(p=>p.ModifypersonModule)
    },
    {
      path:'modifyusers',
      loadChildren:()=> import('./usuario/modifyusers/modifyusers.module').then(u=>u.ModifyusersModule)
    },
    {
      path:'createperson',
      loadChildren:()=> import('./persona/createperson/createperson.module').then(c=>c.CreatepersonModule)
    },
    {
      path:'listperson',
      loadChildren:()=> import('./persona/listperson/listperson.module').then(l=>l.ListpersonModule)
    },
    {
      path:'editperfil',
      loadChildren:()=> import('./persona/editperfil/editperfil.module').then(e=>e.EditperfilModule)
    },
    {
      path:'editPersonPerfil',
      loadChildren:()=> import('./persona/editPersonPerfil/edit-person-perfil.module').then(ed=>ed.EditPersonPerfilModule)
    },
    {
      path:'listusers',
      loadChildren:()=> import('./usuario/listusers/listusers.module').then(lu=>lu.ListusersModule)
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
      loadChildren:()=> import('./unidadtecnica/modify-technicalUnit/technicalunit.module').then(mt=>mt.TechnicalunitModule)
    },
    {
      path:'createunidadtecnica',
      loadChildren:()=> import('./unidadtecnica/create/create.module').then(ul=>ul.CreateModule)
    },
    {
      path:'tipoOT',
      loadChildren:()=> import('./tiposOT/listar/tipo-ot.module').then(tp=>tp.TipoOTModule)
    },
    {
      path:'SubtipoOT',
      loadChildren:()=> import('./subTipoOT/listar/sub-tipo.module').then(sl=>sl.SubTipoModule)
    },
    {
      path:'crearsubtipo',
      loadChildren:()=> import('./subTipoOT/crear/crear-subtipo.module').then(pq=>pq.CrearSubtipoModule)
    },
    {
      path:'creartipo',
      loadChildren:()=> import('./tiposOT/crear/crear-tipo.module').then(q=>q.CrearTipoModule)
    },
    {
      path:'modificartipo',
      loadChildren:()=> import('./tiposOT/modificar/modificar-tipo.module').then(ti=>ti.ModificarTipoModule)
    },
    {
      path:'modificarsubtipo',
      loadChildren:()=> import('./subTipoOT/modificar/modificar-subtipo.module').then(sub=>sub.ModificarSubtipoModule)
    },
    {
      path:'Aplicacion',
      loadChildren:()=> import('./Aplicacion/list/list.module').then(apli=>apli.ListModule)
    },
    {
      path:'CrearAplicacion',
      loadChildren:()=> import('./Aplicacion/create/create.module').then(capli=>capli.CreateModule)
    },
    {
      path:'CrearAplicaciones',
      loadChildren:()=> import('./Aplicaciones/create/create.module').then(caplic=>caplic.CreateModule)
    },
    {
      path:'EditAplicacion',
      loadChildren:()=> import('./Aplicacion/update/update.module').then(mapli=>mapli.UpdateModule)
    },
    {
      path:'SubAplicacion',
      loadChildren:()=> import('./SubAplicacion/list/list.module').then(sub=>sub.ListModule)
    },
    {
      path:'CrearSubAplicacion',
      loadChildren:()=> import('./SubAplicacion/create/create.module').then(csub=>csub.CreateModule)
    },
    {
      path:'EditSubAplicacion',
      loadChildren:()=> import('./SubAplicacion/update/update.module').then(msub=>msub.UpdateModule)
    },
    {
      path:'Prioridad',
      loadChildren:()=> import('./Prioridad/list/list.module').then(pri=>pri.ListModule)
    },
    {
      path:'CrearPrioridad',
      loadChildren:()=> import('./Prioridad/create/create.module').then(cpri=>cpri.CreateModule)
    },
    {
      path:'EditPrioridad',
      loadChildren:()=> import('./Prioridad/update/update.module').then(mpri=>mpri.UpdateModule)
    },
    {
      path:'Complejidad',
      loadChildren:()=> import('./Complejidad/list/list.module').then(com=>com.ListModule)
    },
    {
      path:'CrearComplejidad',
      loadChildren:()=> import('./Complejidad/create/create.module').then(ccom=>ccom.CreateModule)
    },
    {
      path:'EditComplejidad',
      loadChildren:()=> import('./Complejidad/update/update.module').then(mcom=>mcom.UpdateModule)
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
