import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarTitleFormComponent } from './toolbar-title-form.component';
import { MATERIALModule } from '../../../MATERIAL/material.module';



@NgModule({
  declarations: [
    ToolbarTitleFormComponent
  ],
  imports: [
    CommonModule,
    MATERIALModule
  ],
  exports:[

    ToolbarTitleFormComponent
  ]
})
export class ToolbarTitleFormModule { }
