
import { Component, OnInit, Output,  EventEmitter} from '@angular/core';
import { ServicesService } from './../../../websites/services/services.service';
import { ListpersonServiceService } from '../../services/personas/listperson/listperson-service.service';



@Component({
  selector: 'app-headerdash',
  templateUrl: './headerdash.component.html',
  styleUrls: ['./headerdash.component.scss']
})
export class HeaderdashComponent implements OnInit {
  @Output() toggleSidebarForMe: EventEmitter<any>=new EventEmitter();

  constructor(
    public auth: ServicesService,
    public lista: ListpersonServiceService,
  ) { }

  ngOnInit(

  ): void { 
  }

  toggleSidebar() {
    this.toggleSidebarForMe.emit();
  }
}
