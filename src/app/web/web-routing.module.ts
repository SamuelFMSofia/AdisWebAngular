import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WebComponent } from './web.component';

const routes: Routes = [

  {

    path:'',
    component: WebComponent,
    children:[
      {
        path:'',
        redirectTo:'home', pathMatch: 'full',
      },
      {
        path:'home',
        loadChildren:()=> import('../view/home/home.module').then((h)=>h.HomeModule)
      },
      {
        path:'servi',
        loadChildren:()=> import('../view/servi/servi.module').then((x)=>x.ServiModule)
      },
      {
        path:'work',
        loadChildren:()=> import('../view/work/work.module').then((y)=>y.WorkModule)
      },
      {
        path:'login',
        loadChildren:()=> import('../login/login.module').then((l)=>l.LoginModule)
      }


    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebRoutingModule { }


/* {
    path:'home',
    loadChildren:()=> import('../view/home/home.module').then((h)=>h.HomeModule)
  },
  {
    path:'servi',
    loadChildren:()=> import('../view/servi/servi.module').then((x)=>x.ServiModule)
  },
  {
    path:'work',
    loadChildren:()=> import('../view/work/work.module').then((y)=>y.WorkModule)
  },
  {
    path:'login',
    loadChildren:()=> import('../login/login.module').then((l)=>l.LoginModule)
  },
  {
    path:'register',
    loadChildren:()=> import('../register/register.module').then((r)=>r.RegisterModule)
  } */
