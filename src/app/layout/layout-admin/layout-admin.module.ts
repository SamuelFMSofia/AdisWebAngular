import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderlComponent } from './headerl/headerl.component';
import { FooterlComponent } from './footerl/footerl.component';



@NgModule({
  declarations: [
    HeaderlComponent,
    FooterlComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LayoutAdminModule { }
