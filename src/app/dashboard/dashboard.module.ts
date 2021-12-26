import { ListpersonServiceService } from './services/listperson/listperson-service.service';
import { RouterModule } from '@angular/router';
import { FormBuilder, FormsModule, ReactiveFormsModule, FormGroup } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { ShareddashModule } from './shareddash/shareddash.module';
import { MatMenuModule } from '@angular/material/menu';
import { FlexLayoutModule, FlexModule } from '@angular/flex-layout';
import { HttpClientModule, HttpClientXsrfModule } from '@angular/common/http';
import { ModifypersonModule } from './modify/modifyperson/modifyperson.module';

import { ModifyusersModule } from './modify/modifyusers/modifyusers.module';
import { CreatepersonModule } from './create/createperson/createperson.module';


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ShareddashModule,
    MatSidenavModule,
    MatMenuModule,
    MatToolbarModule,
    MatDividerModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    FlexLayoutModule,
    FlexModule,
    MatFormFieldModule,
    HttpClientModule,
    ModifypersonModule,
    ModifyusersModule,
    CreatepersonModule,
    FormsModule,
    RouterModule
  ],
  providers:[
    ListpersonServiceService
  ]
})
export class DashboardModule { }
