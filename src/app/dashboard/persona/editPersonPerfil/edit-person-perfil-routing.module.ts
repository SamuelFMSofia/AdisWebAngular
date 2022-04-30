import { EditPersonPerfilComponent } from './edit-person-perfil.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path:'',
  component:EditPersonPerfilComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditPersonPerfilRoutingModule { }
