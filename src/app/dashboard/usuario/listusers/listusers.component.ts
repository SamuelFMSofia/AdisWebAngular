import { MatPaginator } from '@angular/material/paginator';
import { MusersServiceService } from '../../services/usuarios/musersService/musers-service.service';
import { listusersInterface } from '../../interfaces/usuarios/listusersInterface';
import { listInterface } from '../../interfaces/personas/listInterface';
import { ModifyusersComponent } from '../modifyusers/modifyusers.component';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { MpersonServiceService } from '../../services/personas/mpersonService/mperson-service.service';
import { MatDialog } from '@angular/material/dialog';

import { ListarusersService } from '../../services/usuarios/listusers/listarusers.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { modifyuserInterface } from '../../interfaces/usuarios/modifyuserInterface';

 const ELEMENT_DATA: listusersInterface[] = [];
@Component({
  selector: 'app-listusers',
  templateUrl: './listusers.component.html',
  styleUrls: ['./../../style/styles.scss']
  
})
export class ListusersComponent implements OnInit {
  dataSource:any=[];

  //se define el nombre del arreglo
  displayedColumns: string[] = ['userCode', 'nombreCompleto', 'correo', 'perfil', 'Acciones'];
  @ViewChild(MatPaginator) paginator: MatPaginator | any;

  constructor(
    private service: ListarusersService,
    private serviceu: MusersServiceService,
    private dialog: MatDialog,
    private router: Router
  ) { }
// cuando s einicializa se llama a este metodo para cargar lo datos
  ngOnInit(): void {
    //metodo del servicio
    // data trae tood el contenido
    this.service.getUser().subscribe((data:any) => {
      console.log(data);
      const ELEMENT_DATA: listusersInterface[] =data.data;
      this.dataSource = new MatTableDataSource(ELEMENT_DATA);
      this.dataSource.paginator=this.paginator;
      //este datasource son datos que devuelven la tabla usuario
     // this.dataSource= new  MatTableDataSource<listInterface>(data as listInterface[]);
     // console.log(this.dataSource)

    },
    //(errorData) => this.router.navigate(['/login-user'])
    );
  }

  upgradeUser(use: modifyuserInterface ){
    //console.log(user);
    this.dialog.open(ModifyusersComponent,{
      data:use
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
