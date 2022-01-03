
import { MatInputModule } from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { CreatepersonModule } from './../createperson/createperson.module';
import { ModifyusersModule } from './../../modify/modifyusers/modifyusers.module';
import { ModifypersonModule } from './../../modify/modifyperson/modifyperson.module';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

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
    MatButtonModule,
    MatIconModule,
    RouterModule,
    ModifypersonModule,
    ModifyusersModule,
    CreatepersonModule,
    MatInputModule,

    ModifyusersModule
  ],

  entryComponents:[

    ModifyusersModule
  ],
  exports:[
    ListpersonComponent
  ]
})
export class ListpersonModule { }
