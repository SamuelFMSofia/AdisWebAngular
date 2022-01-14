import { MatSelectModule } from '@angular/material/select';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { SearchModule } from './../../create/search/search.module';
import { MatButtonModule } from '@angular/material/button';
import { FlexModule } from '@angular/flex-layout';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModifyusersRoutingModule } from './modifyusers-routing.module';
import { ModifyusersComponent } from './modifyusers.component';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule, FormsModule, FormBuilder, FormGroup } from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';


@NgModule({
  declarations: [
    ModifyusersComponent
  ],
  imports: [
    CommonModule,
    ModifyusersRoutingModule,

    MatCardModule,
    MatFormFieldModule,
    FlexModule,
    FlexLayoutModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    FormsModule,
    SearchModule,
    MatIconModule,
    MatDialogModule,
    MatButtonModule,
    HttpClientModule,
    MatSelectModule

  ],
  exports:[
    ModifyusersComponent
  ]
})
export class ModifyusersModule { }
