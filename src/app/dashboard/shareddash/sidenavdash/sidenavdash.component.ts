import { Component, OnInit } from '@angular/core';
declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
   
    class: string;
}
export const ROUTES: RouteInfo[] = [
  { path: 'listusers', title: 'Dashboard',  class: '' },
  { path: 'listperson', title: 'User Profile',   class: '' },

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
