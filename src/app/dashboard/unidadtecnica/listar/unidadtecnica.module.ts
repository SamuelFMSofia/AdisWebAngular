import { CreateModule } from './../create/create.module';
import { TechnicalunitModule } from './../../modify/modify-technicalUnit/technicalunit.module';
import { SearchModule } from './../../create/search/search.module';
import { UnidatecnicaComponent } from './unidatecnica.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { HttpClientModule } from '@angular/common/http';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';

import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { FlexModule, FlexLayoutModule } from '@angular/flex-layout';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { UnidadtecnicaRoutingModule } from './unidadtecnica-routing.module';

import {MatRadioModule} from '@angular/material/radio';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatToolbarModule } from '@angular/material/toolbar';



@NgModule({
  declarations: [UnidatecnicaComponent],
  imports: [
    CommonModule,
    UnidadtecnicaRoutingModule,
     MatTableModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatTabsModule,
    SearchModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    RouterModule,
    TechnicalunitModule,
    CreateModule,
    MatInputModule,
    MatToolbarModule

  ],
  entryComponents:[
    TechnicalunitModule
  ],
  exports:[
    UnidatecnicaComponent
  ]

})
export class UnidadtecnicaModule { }
