import { Router } from '@angular/router';
import { ListuoService } from './../services/listuoService/listuo.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-uo',
  templateUrl: './list-uo.component.html',
  styleUrls: ['./list-uo.component.scss']
})
export class ListUOComponent implements OnInit {
listUO:any;

ChangeCargo(event:any){
  console.log(event.target.value)
}
  constructor(
    public service:ListuoService,
    private  router:Router
  ) { }

  ngOnInit(): void {
    this.service.getlistUo().subscribe((data:any)=>{
      this.listUO=data;
    })
  }

}
