import { modifyPersonInterface } from '../../interfaces/personas/modifyPersonInterface';
import { MpersonServiceService } from '../../services/personas/mpersonService/mperson-service.service';
import { listInterface } from '../../interfaces/personas/listInterface';
import { modifyuserInterface } from '../../interfaces/usuarios/modifyuserInterface';
import { ModifypersonComponent } from '../modifyperson/modifyperson.component';
import { MusersServiceService } from '../../services/usuarios/musersService/musers-service.service';
import { ModifyusersComponent } from '../../usuario/modifyusers/modifyusers.component';

import { ListpersonServiceService } from '../../services/personas/listperson/listperson-service.service';
import { MatFormFieldModule } from '@angular/material/form-field';



import { Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
/*
import { MatTableDataSource } from '@angular/material/table';

import { listInterface } from '../../interfaces/listInterface'; */

import {MatTableDataSource} from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';


const ELEMENT_DATA: listInterface[] = [];


@Component({
  selector: 'app-listperson',
  templateUrl: './listperson.component.html',
  styleUrls: ['./../../style/styles.scss']
})
export class ListpersonComponent implements OnInit {
   dataSource:any=[];

   displayedColumns: string[] = ['numeroDocumento', 'nombreCompleto', 'cargo', 'unidadOrganizacional','gerencia', 'Acciones'];
   @ViewChild(MatPaginator) paginator: MatPaginator | any;

  constructor(
     private service: ListpersonServiceService,
     private serviuser: MpersonServiceService,
      private router: Router,
      private dialog: MatDialog
  ) { }


   ngOnInit() {

    //realiza la verificacion
    // se va a la parte de back end al controlador para verificar los autorizado

    this.service.getUsers().subscribe((data:any) => {
      console.log(data);
      const ELEMENT_DATA: listInterface[] =data.data;
      this.dataSource = new MatTableDataSource(ELEMENT_DATA);
      this.dataSource.paginator=this.paginator;

    },
    //(errorData) => this.router.navigate(['/login-user'])
    );



  }

  upgradeUsuario(user: modifyPersonInterface ){
    //console.log(user);
    this.dialog.open(ModifypersonComponent,{
      data:user
    })


  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

 
}
