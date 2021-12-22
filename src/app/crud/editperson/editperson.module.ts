import { MatFormFieldModule } from '@angular/material/form-field';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditpersonRoutingModule } from './editperson-routing.module';
import { EditpersonComponent } from './editperson.component';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';


@NgModule({
  declarations: [
    EditpersonComponent
  ],
  imports: [
    CommonModule,
    EditpersonRoutingModule,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule
  ]
})
export class EditpersonModule { }
