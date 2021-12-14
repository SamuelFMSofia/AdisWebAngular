import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SidenavListComponent } from './sidenav-list/sidenav-list.component';


/* material */
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
/*se importa el cliente del modulo*/
import {HttpClientModule} from '@angular/common/http';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';

import {MatListModule} from '@angular/material/list';

import {RouterModule} from '@angular/router';
import {MatTabsModule} from '@angular/material/tabs';

import { FlexModule } from '@angular/flex-layout';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatExpansionModule} from '@angular/material/expansion';
//import { SidenavListComponent } from './sidenav-list/sidenav-list.component';
//mport { SidenavListComponent } from './sidenav-list/sidenav-list.component';



@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    SidenavListComponent

  ],
  imports: [
    CommonModule,
    BrowserModule, HttpClientModule, BrowserAnimationsModule,
    MatButtonModule, MatTableModule,MatToolbarModule, MatSidenavModule, MatIconModule, ReactiveFormsModule,
    MatInputModule, MatCardModule, MatDialogModule, MatListModule, FormsModule, RouterModule, FlexModule
    ,MatExpansionModule,
    MatTabsModule, FlexLayoutModule
  ],
  exports:[
    FooterComponent,
    HeaderComponent,
    SidenavListComponent
  ]
})
export class SharedModule { }
