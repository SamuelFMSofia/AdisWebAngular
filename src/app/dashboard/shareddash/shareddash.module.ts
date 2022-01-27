

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterdashComponent } from './footerdash/footerdash.component';
import { HeaderdashComponent } from './headerdash/headerdash.component';
import { SidenavdashComponent } from './sidenavdash/sidenavdash.component';
import { MATERIALModule } from '../../MATERIAL/material.module';



@NgModule({
  declarations: [
    FooterdashComponent,
    HeaderdashComponent,
    SidenavdashComponent
  ],
  imports: [
    CommonModule,
    
    MATERIALModule
    
  
  ],
  exports:[
    FooterdashComponent,
    HeaderdashComponent,
    SidenavdashComponent
  ]
})
export class ShareddashModule { }
