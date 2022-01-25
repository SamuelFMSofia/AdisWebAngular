import { Component, OnInit } from '@angular/core';
declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
   
    class: string;
}
export const ROUTES: RouteInfo[] = [
  { path: 'listusers', title: 'USUARIOS',  class: '' },
  { path: 'listperson', title: 'PERSONAS',   class: '' },
  { path: 'unidadTecnica', title: 'UNIDAD TECNICA',   class: '' },
  { path: 'createperson', title: 'CREAR PERSONA',   class: '' },

];
@Component({
  selector: 'app-sidenavdash',
  templateUrl: './sidenavdash.component.html',
  styleUrls: ['./sidenavdash.component.scss']
})
export class SidenavdashComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  

}
