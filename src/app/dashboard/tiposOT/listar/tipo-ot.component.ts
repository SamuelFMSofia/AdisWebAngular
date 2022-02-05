import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ModificarTipoComponent } from './../modificar/modificar-tipo.component';
import { FormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { listarTipoOT } from './../../interfaces/tipoOT/listar';
import { Component, OnInit, ViewChild } from '@angular/core';
import { CreateService } from '../../services/tipoOT/create/create.service';

@Component({
  selector: 'app-tipo-ot',
  templateUrl: './tipo-ot.component.html',
  styleUrls: ['./tipo-ot.component.scss']
})
export class TipoOTComponent implements OnInit {
  Estado: any[] = ['Activo', 'Pasivo'];

  ELEMENT_DATA:listarTipoOT[]=[];

  displayedColumns: string[] = ['idTipoOT','Nombre', 'idDptoTecnico' , 'usuario',  'Acciones'];
  dataSource: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator: MatPaginator | any;


  constructor(
    private service: CreateService,
    private dialog: MatDialog,
    private router: Router,
    public snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.service.listarTiposOT().subscribe((data:any) => {
      console.log(data);
      const ELEMENT_DATA: listarTipoOT[] =data.data;
      this.dataSource = new MatTableDataSource(ELEMENT_DATA);
      this.dataSource.paginator=this.paginator;
      //este datasource son datos que devuelven la tabla usuario
     // this.dataSource= new  MatTableDataSource<listInterface>(data as listInterface[]);
     // console.log(this.dataSource)

    },
    //(errorData) => this.router.navigate(['/login-user'])
    );
  }

  applyFilter(event: Event) {
     const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  upgradeTipo(tipo:listarTipoOT){
     this.dialog.open(ModificarTipoComponent,{
      data:tipo
    })
  }


}
