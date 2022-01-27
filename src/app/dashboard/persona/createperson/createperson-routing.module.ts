import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatepersonComponent } from './createperson.component';

const routes: Routes = [
  {
    path:'',
    component: CreatepersonComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreatepersonRoutingModule { }
