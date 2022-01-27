import { HttpClientModule } from '@angular/common/http';
import { PasswordModule } from '../password/password.module';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatSelectChange, MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';

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
import { MATERIALModule } from '../../../MATERIAL/material.module';


@NgModule({
  declarations: [
    ModifypersonComponent
  ],
  imports: [
    CommonModule,
    ModifypersonRoutingModule,
    PasswordModule,
    MATERIALModule

  ],

  exports:[
    ModifypersonComponent
  ]
})
export class ModifypersonModule { }
