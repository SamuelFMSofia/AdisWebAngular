
import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface SideNavToggle{
  screenWidth:number;
  collapsed: boolean;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  location: Location
 /*  constructor(
    private router: Router,
    location: Location
  ) {
    this.location=location;
  } */
  title = 'Adis-HS';

  isSideNavCollapsed = false;
  screenWidth = 0;

  sideBarOpen = true;

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }
  onToggleSideNav(data: SideNavToggle):void{
    this.screenWidth = data.screenWidth;
    this.isSideNavCollapsed = data.collapsed;
   }
  ngOnInit(){


  }

 

}
