import { HttpClientModule } from '@angular/common/http';
import { PasswordModule } from './../../create/password/password.module';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { SearchModule } from './../../create/search/search.module';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { FlexModule, FlexLayoutModule } from '@angular/flex-layout';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModifypersonRoutingModule } from './modifyperson-routing.module';
import { ModifypersonComponent } from './modifyperson.component';
import {MatCardModule} from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatDialogModule} from '@angular/material/dialog';
import {MatExpansionModule} from '@angular/material/expansion';


@NgModule({
  declarations: [
    ModifypersonComponent
  ],
  imports: [
    CommonModule,
    ModifypersonRoutingModule,
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
    FormsModule,
    MatAutocompleteModule,
    PasswordModule,
    MatExpansionModule,
    HttpClientModule,
    MatSelectModule

  ],
  exports:[
    ModifypersonComponent
  ]
})
export class ModifypersonModule { }
