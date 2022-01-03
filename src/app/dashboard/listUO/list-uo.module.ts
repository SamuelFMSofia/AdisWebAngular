import { HttpClientModule } from '@angular/common/http';
import { ListUOComponent } from './list-uo.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListUORoutingModule } from './list-uo-routing.module';


@NgModule({
  declarations: [ListUOComponent],
  imports: [
    CommonModule,
    ListUORoutingModule,
    HttpClientModule
  ],
  exports:[
    ListUOComponent
  ]
})
export class ListUOModule { }
