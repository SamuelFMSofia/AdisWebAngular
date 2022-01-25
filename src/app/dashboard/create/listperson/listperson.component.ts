import { modifyPersonInterface } from '../../interfaces/modifyPersonInterface';
import { MpersonServiceService } from './../../services/mpersonService/mperson-service.service';
import { listInterface } from './../../interfaces/listInterface';
import { modifyuserInterface } from './../../interfaces/modifyuserInterface';
import { ModifypersonComponent } from './../../modify/modifyperson/modifyperson.component';
import { MusersServiceService } from './../../services/musersService/musers-service.service';
import { ModifyusersComponent } from './../../modify/modifyusers/modifyusers.component';

import { ListpersonServiceService } from './../../services/listperson/listperson-service.service';
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
  styleUrls: ['./listperson.component.scss']
})
export class ListpersonComponent implements OnInit {
   dataSource:any=[];

   displayedColumns: string[] = ['numeroDocumento', 'nombreCompleto', 'cargo', 'unidadOrganizacional','gerencia', 'Acciones'];
   @ViewChild(MatPaginator) paginator: MatPaginator;
   @ViewChild(MatSort) sort: MatSort;
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
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}

 /*   applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }  */


