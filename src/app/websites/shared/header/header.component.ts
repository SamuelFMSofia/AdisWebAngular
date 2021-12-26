import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output()  sidenavToggle = new EventEmitter();
  @Output() sidenavClose = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }
  onSidenavClose(){
    this.sidenavClose.emit();
  }

 onToggleSidenav() {
    this.sidenavToggle.emit();
  }

}
