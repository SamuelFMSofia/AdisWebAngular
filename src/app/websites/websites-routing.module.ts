import { WebsitesComponent } from './websites.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    component: WebsitesComponent,
    children:[
      {
        path:'',
        redirectTo:'home', pathMatch: 'full',
      },
      {
        path:'home',
        loadChildren:()=> import('./view/home/home.module').then((h)=>h.HomeModule)
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
        loadChildren:()=> import('./login/login.module').then((z)=>z.LoginModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebsitesRoutingModule { }
