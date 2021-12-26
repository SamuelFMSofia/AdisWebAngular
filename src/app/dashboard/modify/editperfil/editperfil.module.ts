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
    MatFormFieldModule
  ]
})
export class EditperfilModule { }
