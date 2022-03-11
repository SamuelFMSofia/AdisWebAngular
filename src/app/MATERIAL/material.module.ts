import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatMenuModule } from '@angular/material/menu';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatRadioModule } from '@angular/material/radio';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FlexModule, FlexLayoutModule } from '@angular/flex-layout';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatSelectModule } from '@angular/material/select';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatRippleModule} from '@angular/material/core';

import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { NgModule } from '@angular/core';
import { MatNativeDateModule } from '@angular/material/core';



const matModules = [
  MatTableModule,
  ReactiveFormsModule,
  HttpClientModule,
  MatTabsModule,
  FormsModule,
  MatCardModule,
  MatButtonModule,
  MatIconModule,
  RouterModule,

  MatInputModule,
  MatToolbarModule,
  MatPaginatorModule,

  MatSelectModule,

   MatAutocompleteModule,
   MatFormFieldModule,
   FlexModule,
   FlexLayoutModule,

   MatSnackBarModule,
   MatRadioModule,

   MatTooltipModule,


   MatDialogModule,
  
   MatExpansionModule,

   MatMenuModule,

   MatDividerModule,
   MatListModule,
   MatSidenavModule,

 
   MatProgressSpinnerModule,

   MatCheckboxModule,

   MatSlideToggleModule,
   MatNativeDateModule,
   MatDatepickerModule,
   MatProgressBarModule,
   MatRippleModule,
   
];
@NgModule({
  imports: matModules,
  exports: matModules,
})
export class MATERIALModule { }
