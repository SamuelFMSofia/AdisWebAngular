import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-headera',
  templateUrl: './headera.component.html',
  styleUrls: ['./headera.component.scss']
})
export class HeaderaComponent implements OnInit {
@Output() toggleSidebarForMe: EventEmitter<any>=new EventEmitter();

location: Location
  constructor(
    private router: Router,
    location: Location

  ) { 
    this.location=location;
  }

  ngOnInit(): void {
  }
  toggleSidebar() {
    this.toggleSidebarForMe.emit();
  }
  getTitle(){
    var titlee = this.location.prepareExternalUrl(this.location.path());
    if(titlee.charAt(0)==='#'){
      titlee=titlee.slice(1);
    }
    /* var titlee = this.location.prepareExternalUrl(this.location.path());
    if(titlee.charAt(0) === '#'){
        titlee = titlee.slice( 1 );
    }

    for(var item = 0; item < this.listTitles.length; item++){
        if(this.listTitles[item].path === titlee){
            return this.listTitles[item].title;
        }
    }
    return 'Dashboard'; */
  }

}
