import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule, FlexModule } from '@angular/flex-layout';
import { MatExpansionModule } from '@angular/material/expansion';
import { PasswordModule } from './../../create/password/password.module';
import { MatInputModule } from '@angular/material/input';
import { SearchModule } from './../../create/search/search.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditperfilRoutingModule } from './editperfil-routing.module';
import { EditperfilComponent } from './editperfil.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    EditperfilComponent
  ],
  imports: [
    CommonModule,
    EditperfilRoutingModule,
    MatTabsModule,
    MatCardModule,
    MatIconModule,
    MatFormFieldModule,
    SearchModule,
    MatInputModule,
    PasswordModule,
    MatExpansionModule,
    FlexLayoutModule,
    FlexModule,
    HttpClientModule
  ],
  exports:[
    EditperfilComponent
  ]
})
export class EditperfilModule { }
