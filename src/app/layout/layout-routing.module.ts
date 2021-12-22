import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeaComponent } from '../homea/homea.component';
import { LayoutComponent } from './layout.component';


const routes: Routes = [
{
  path:'',
  component: LayoutComponent,
  children:[
    {
      path:'register',
      loadChildren:()=> import('../register/register.module').then((r)=>r.RegisterModule)
    }
  ]

}


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
