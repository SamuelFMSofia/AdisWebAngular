import { Component, OnInit,  Output, EventEmitter } from '@angular/core';
import { AuthService } from '../../../autentication/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output()  sidenavToggle = new EventEmitter();
  @Output() sidenavClose = new EventEmitter();
  constructor(
    public auth: AuthService
  ) { }

  ngOnInit(): void {
  }

  onSidenavClose(){
    this.sidenavClose.emit();
  }

 onToggleSidenav() {
    this.sidenavToggle.emit();
  }

}
