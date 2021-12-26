
import { SearchModule } from './../search/search.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {  MatTableModule } from '@angular/material/table';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListpersonRoutingModule } from './listperson-routing.module';
import { ListpersonComponent } from './listperson.component';
import {MatTabsModule} from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';



@NgModule({
  declarations: [
    ListpersonComponent
  ],
  imports: [
    CommonModule,
    ListpersonRoutingModule,

    MatTableModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatTabsModule,
    SearchModule,
    MatCardModule,
    HttpClientModule
  ]
})
export class ListpersonModule { }
