//import { MatDatepickerModule } from '@angular/material/datepicter';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './register.component';

import { ReactiveFormsModule } from '@angular/forms';
//import { MatDatepickerModule } from '@angular/material/datepicker';
//import { MatNativeDateModule } from '@angular/material/core';
import {MatCardModule} from '@angular/material/card';
import { FlexLayoutModule, FlexModule } from '@angular/flex-layout';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';




@NgModule({
  declarations: [
    RegisterComponent
  ],
  imports: [
    CommonModule,
    RegisterRoutingModule,
   MatFormFieldModule,
   FlexLayoutModule,
   FlexModule,
   MatCardModule,
   ReactiveFormsModule,
   //MatDatepickerModule
   MatButtonModule,
   MatIconModule,
   MatInputModule

  ]
})
export class RegisterModule { }
