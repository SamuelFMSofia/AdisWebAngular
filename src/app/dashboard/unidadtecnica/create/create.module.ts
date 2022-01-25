import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatRadioModule } from '@angular/material/radio';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';
import { SearchModule } from './../../create/search/search.module';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { FlexModule, FlexLayoutModule } from '@angular/flex-layout';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { MatSelectModule } from '@angular/material/select';
import { CreateComponent } from './create.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';

import { CreateRoutingModule } from './create-routing.module';



@NgModule({
  declarations: [
    CreateComponent
  ],
  imports: [
    CommonModule,
    CreateRoutingModule,
    MatSelectModule,
    HttpClientModule,
     MatCardModule,
     MatAutocompleteModule,
     MatFormFieldModule,
     FlexModule,
     FlexLayoutModule,
     MatInputModule,
     MatButtonModule,
     ReactiveFormsModule,
     RouterModule,
     SearchModule,
     MatIconModule,
     MatSnackBarModule,
     MatRadioModule,
     MatTabsModule,
     MatTableModule,
     MatTooltipModule,
     MatPaginatorModule,
     MatToolbarModule
  ]
})
export class CreateModule { }
