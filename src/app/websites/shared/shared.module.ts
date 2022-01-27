
import { NgModule } from '@angular/core';


import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SidenavListComponent } from './sidenav-list/sidenav-list.component';

import { CommonModule } from '@angular/common';

import { MATERIALModule } from '../../MATERIAL/material.module';


@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    SidenavListComponent
  ],
  imports: [
    CommonModule,

   MATERIALModule
  ],
  exports:[
    FooterComponent,
    HeaderComponent,
    SidenavListComponent
  ]
})
export class SharedModule { }
