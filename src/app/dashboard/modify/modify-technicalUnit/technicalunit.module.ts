import { MatSelectModule } from '@angular/material/select';
import { HttpClientModule } from '@angular/common/http';
import { MatExpansionModule } from '@angular/material/expansion';
import { PasswordModule } from './../../create/password/password.module';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { SearchModule } from './../../create/search/search.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { FlexModule, FlexLayoutModule } from '@angular/flex-layout';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TechnicalunitRoutingModule } from './technicalunit-routing.module';
import { TechnicalunitComponent } from './technicalunit.component';




@NgModule({
  declarations: [
    TechnicalunitComponent
  ],
  imports: [
    CommonModule,
    TechnicalunitRoutingModule,

    MatCardModule,
    MatFormFieldModule,
    FlexModule,
    FlexLayoutModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    SearchModule,
    MatIconModule,
    MatDialogModule,
    MatAutocompleteModule,
    PasswordModule,
    MatExpansionModule,
    HttpClientModule,
    MatSelectModule,
    FormsModule

  ],
  exports:[
    TechnicalunitComponent
  ]
})
export class TechnicalunitModule { }
