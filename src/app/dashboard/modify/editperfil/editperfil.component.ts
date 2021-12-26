import { ServicesService } from './../../../websites/services/services.service';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-editperfil',
  templateUrl: './editperfil.component.html',
  styleUrls: ['./editperfil.component.scss']
})
export class EditperfilComponent implements OnInit {


  constructor(
    public list: ServicesService
  ) { }

  ngOnInit(): void {

  }

}
