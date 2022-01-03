import { ROUTES } from './shareddash/sidenavdash/sidenavdash.component';
import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit{
  private listTitles: any[];
  location: Location
  constructor(
    private router: Router,
    location: Location
  ) {
    this.location=location;
  }


  sideBarOpen = true;

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }

  ngOnInit(){
    this.listTitles = ROUTES.filter(listTitle => listTitle);

  }

  getTitle(){

    var titlee = this.location.prepareExternalUrl(this.location.path())

    if(titlee.charAt(1) ==='dashboard')
    console.log(titlee);
    {

      titlee=titlee.slice(1);
    }


       for(var item = 0; item < this.listTitles.length; item++){
        if(this.listTitles[item].path === titlee){
            return this.listTitles[item].title;
        }
    }
    return titlee;
  }

}
