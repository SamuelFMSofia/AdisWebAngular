import { MatDividerModule } from '@angular/material/divider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooteraComponent } from './footera/footera.component';
import { SidenavaComponent } from './sidenava/sidenava.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { HeaderaComponent } from './headera/headera.component';
/* --import { HomeaComponent } from './homea/homea.component'; */


@NgModule({
  declarations: [
    FooteraComponent,
    SidenavaComponent,
    HeaderaComponent/* ,
    HomeaComponent */
  ],
  imports: [
    CommonModule,
    /* BrowserModule,
    BrowserAnimationsModule,  */
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatDividerModule,
    MatListModule

  ],
  exports:[FooteraComponent,
    SidenavaComponent,
    HeaderaComponent/* ,
    HomeaComponent */
  ]
})
export class ComponentsModule { }
