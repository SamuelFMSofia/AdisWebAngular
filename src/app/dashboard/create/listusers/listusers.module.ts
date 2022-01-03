import { MatFormFieldControl } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ModifypersonModule } from './../../modify/modifyperson/modifyperson.module';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { SearchModule } from './../search/search.module';
import { MatTabsModule } from '@angular/material/tabs';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListusersRoutingModule } from './listusers-routing.module';
import { ListusersComponent } from './listusers.component';


@NgModule({
  declarations: [
    ListusersComponent
  ],
  imports: [
    CommonModule,
    ListusersRoutingModule,

    MatTableModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatTabsModule,
    SearchModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    RouterModule,
    ModifypersonModule,
    MatInputModule
  ],
  entryComponents:[

    ModifypersonModule
  ],

  exports:[
    ListusersComponent
  ]
})
export class ListusersModule { }
