
import { ListpersonServiceService } from './../../services/listperson/listperson-service.service';
import { HttpClient } from '@angular/common/http';


import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { MatTableDataSource } from '@angular/material/table';

import { listInterface } from '../../interfaces/listInterface';



@Component({
  selector: 'app-listperson',
  templateUrl: './listperson.component.html',
  styleUrls: ['./listperson.component.scss']
})
export class ListpersonComponent implements OnInit {
  dataSource:any=[];

  displayedColumns: string[] = ['userCode', 'nombre_Completo','cargo', 'unidadOrganizacional', 'gerencia','Acciones']
  constructor(
     private service: ListpersonServiceService,
    /* private router:Router */

  ) { }

  ngOnInit() {

    //realiza la verificacion
    // se va a la parte de back end al controlador para verificar los autorizado
    this.service.getUsers().subscribe((data:any) => {
      console.log(data);
      //este datasource son datos que devuelven la tabla usuario
      this.dataSource= new  MatTableDataSource<listInterface>(data as listInterface[]);
     
    },
    //(errorData) => this.router.navigate(['/login-user'])


    );
  }

}
