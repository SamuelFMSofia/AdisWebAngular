import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientUserComponent } from './client-user.component';

const routes: Routes = [
  {
    path:'listaclient',
    component:ClientUserComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientUserRoutingModule { }
