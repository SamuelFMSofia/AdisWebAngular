import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { FlexModule, FlexLayoutModule } from '@angular/flex-layout';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreatepersonRoutingModule } from './createperson-routing.module';
import { CreatepersonComponent } from './createperson.component';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    CreatepersonComponent
  ],
  imports: [
    CommonModule,
    CreatepersonRoutingModule,
    MatCardModule,
    MatFormFieldModule,
    FlexModule,
    FlexLayoutModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    RouterModule

  ],
  providers: [],
  bootstrap: []
})
export class CreatepersonModule { }
