import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientUserRoutingModule } from './client-user-routing.module';
import {MatTableModule} from '@angular/material/table';
import { BrowserModule } from '@angular/platform-browser';
import { ClientUserComponent } from './client-user.component';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [
    ClientUserComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    ClientUserRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatButtonModule,
    MatDialogModule

  ],
  exports:[
    MatTableModule
  ]
})
export class ClientUserModule { }
