import { RouterModule } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterdashComponent } from './footerdash/footerdash.component';
import { HeaderdashComponent } from './headerdash/headerdash.component';
import { SidenavdashComponent } from './sidenavdash/sidenavdash.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';



@NgModule({
  declarations: [
    FooterdashComponent,
    HeaderdashComponent,
    SidenavdashComponent
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    RouterModule
    
  
  ],
  exports:[
    FooterdashComponent,
    HeaderdashComponent,
    SidenavdashComponent
  ]
})
export class ShareddashModule { }
