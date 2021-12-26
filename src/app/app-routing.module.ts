import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
 
    {
      path:'websites',
      loadChildren:()=> import('./websites/websites.module').then(w=>w.WebsitesModule)
    },
    {
      path:'dashboard',
      loadChildren:()=> import('./dashboard/dashboard.module').then(d=>d.DashboardModule)
    },
    {
      path:'**',
      redirectTo:'websites'
    }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
