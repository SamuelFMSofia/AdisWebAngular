import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [

/*   {
    path:'**',
    redirectTo:'home',
  }, */
  {
    path:'home',
    loadChildren:()=> import('./view/home/home.module').then((m)=>m.HomeModule)
  },

  {
    path:'servi',
    loadChildren:()=> import('./view/servi/servi.module').then((x)=>x.ServiModule)
  },
  {
    path:'work',
    loadChildren:()=> import('./view/work/work.module').then((y)=>y.WorkModule)
  },
  {
    path:'login',
    loadChildren:()=> import('./login/login.module').then((l)=>l.LoginModule)
  },
  {
    path:'register',
    loadChildren:()=> import('./register/register.module').then((r)=>r.RegisterModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
