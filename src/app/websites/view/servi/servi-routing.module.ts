import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServiComponent } from './servi.component';

const routes: Routes = [
  {
    path:'',
    component: ServiComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServiRoutingModule { }
