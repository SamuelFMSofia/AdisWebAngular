import { FlexModule, FlexLayoutModule } from '@angular/flex-layout';
import { MatSelectModule } from '@angular/material/select';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchRoutingModule } from './search-routing.module';
import { SearchComponent } from './search.component';
import {MatFormFieldControl, MatFormFieldModule} from '@angular/material/form-field';



@NgModule({
  declarations: [
    SearchComponent
  ],
  imports: [
    CommonModule,
    SearchRoutingModule,
    MatFormFieldModule,
    MatSelectModule,
    FlexModule,
    FlexLayoutModule
  ],
  exports:[
    SearchComponent
  ]
})
export class SearchModule { }
