import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { HttpClientModule } from '@angular/common/http';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';
import { SearchModule } from './../create/search/search.module';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { FlexModule, FlexLayoutModule } from '@angular/flex-layout';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { UnidadtecnicaRoutingModule } from './unidadtecnica-routing.module';
import { UnidatecnicaComponent } from './unidatecnica.component';




@NgModule({
  declarations: [UnidatecnicaComponent],
  imports: [
    CommonModule,
    UnidadtecnicaRoutingModule,
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
     MatSnackBarModule

  ],
  
})
export class UnidadtecnicaModule { }
