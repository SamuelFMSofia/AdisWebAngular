import { MatButtonModule } from '@angular/material/button';
import { FlexModule, FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModifyusersRoutingModule } from './modifyusers-routing.module';
import { ModifyusersComponent } from './modifyusers.component';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule, FormsModule, FormBuilder, FormGroup } from '@angular/forms';


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
    FormsModule

  ]
})
export class ModifyusersModule { }
