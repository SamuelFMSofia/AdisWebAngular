import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { SearchModule } from './../search/search.module';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { FlexModule, FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PasswordRoutingModule } from './password-routing.module';
import { PasswordComponent } from './password.component';
import { MatFormFieldModule } from '@angular/material/form-field';


@NgModule({
  declarations: [
    PasswordComponent
  ],
  imports: [
    CommonModule,
    PasswordRoutingModule,
    MatCardModule,
    MatFormFieldModule,
    FlexModule,
    FlexLayoutModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    RouterModule,

    MatIconModule,
    HttpClientModule

  ],
  exports:[
    PasswordComponent
  ]
})
export class PasswordModule { }
