import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListpersonComponent } from './listperson.component';

const routes: Routes = [
  {
    path:'',
    component: ListpersonComponent,
    children:[
      {
        path:'modifyusers',
        loadChildren:()=> import('../../modify/modifyusers/modifyusers.module').then(u=>u.ModifyusersModule)
      },
      {
        path:'modifyperson',
        loadChildren:()=> import('../../modify/modifyperson/modifyperson.module').then(p=>p.ModifypersonModule)
      },
      {
        path:'modifyusers',
        loadChildren:()=> import('../../modify/modifyusers/modifyusers.module').then(u=>u.ModifyusersModule)
      },
      {
        path:'createperson',
        loadChildren:()=> import('../../create/createperson/createperson.module').then(c=>c.CreatepersonModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListpersonRoutingModule { }
