import { listusersInterface } from './../../interfaces/listusersInterface';
import { listInterface } from './../../interfaces/listInterface';
import { ModifyusersComponent } from './../../modify/modifyusers/modifyusers.component';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { MpersonServiceService } from './../../services/mpersonService/mperson-service.service';
import { MatDialog } from '@angular/material/dialog';
import { ModifypersonComponent } from './../../modify/modifyperson/modifyperson.component';
import { modifypersonInterface } from './../../interfaces/modifypersonInterface';
import { ListarusersService } from '../../services/listusers/listarusers.service';
import { Component, OnInit } from '@angular/core';

 const ELEMENT_DATA: listusersInterface[] = [];
@Component({
  selector: 'app-listusers',
  templateUrl: './listusers.component.html',
  styleUrls: ['./listusers.component.scss']
})
export class ListusersComponent implements OnInit {
  dataSource:any=[];

  //se define el nombre del arreglo
  displayedColumns: string[] = ['userCode', 'nombreCompleto', 'correo', 'perfil','estado', 'Acciones'];


  constructor(
    private service: ListarusersService,
    private serviceu: MpersonServiceService,
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
      //este datasource son datos que devuelven la tabla usuario
     // this.dataSource= new  MatTableDataSource<listInterface>(data as listInterface[]);
     // console.log(this.dataSource)

    },
    //(errorData) => this.router.navigate(['/login-user'])
    );
  }

  upgradeUser(use: modifypersonInterface ){
    //console.log(user);
    this.dialog.open(ModifypersonComponent,{
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
