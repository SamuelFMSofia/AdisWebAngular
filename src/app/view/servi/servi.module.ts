import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiRoutingModule } from './servi-routing.module';
import { ServiComponent } from './servi.component';

import {MatExpansionModule} from '@angular/material/expansion';


@NgModule({
  declarations: [
    ServiComponent
  ],
  imports: [
    CommonModule,
    ServiRoutingModule,
    MatExpansionModule
  ]
})
export class ServiModule { }
