
import { MatToolbarModule } from '@angular/material/toolbar';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
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
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { MATERIALModule } from '../../../MATERIAL/material.module';


@NgModule({
  declarations: [
    CreatepersonComponent
  ],
  imports: [
    CommonModule,
    CreatepersonRoutingModule,
   MATERIALModule

  ],
  exports:[

  ],
  providers: [],
  bootstrap: []
})
export class CreatepersonModule { }
