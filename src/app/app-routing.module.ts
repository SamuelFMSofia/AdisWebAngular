import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeaComponent } from './homea/homea.component';


const routes: Routes = [

 {
    path:'web',
    redirectTo:'web', pathMatch: 'full',
  },
  {
    path:'web',
    loadChildren:()=> import('./web/web.module').then((m)=>m.WebModule)
  }
  ,
  {
    path:'layout',
    loadChildren:()=> import('./layout/layout.module').then((t)=>t.LayoutModule)
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
