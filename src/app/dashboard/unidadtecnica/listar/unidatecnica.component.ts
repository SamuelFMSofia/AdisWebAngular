import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TechnicalunitComponent } from '../modify-technicalUnit/technicalunit.component';
import { MatDialog } from '@angular/material/dialog';
import { UnidadTecnicaService } from '../../services/unidadTecnica/Create/unidad-tecnica.service';
import { Router } from '@angular/router';
import { unidadTecnicaInterface } from '../../interfaces/unidad_tecnica/unidadTecnicaInterface';
import { MatTableDataSource } from '@angular/material/table';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';





@Component({
  selector: 'app-unidatecnica',
  templateUrl: './unidatecnica.component.html',
  styleUrls: ['./../../style/styles.scss']
})
export class UnidatecnicaComponent implements OnInit {
 

  ELEMENT_DATA:unidadTecnicaInterface[]=[];

  displayedColumns: string[] = ['idDptoTecnico','nombre', 'sigla', 'secuenciaOT',  'Acciones'];
  dataSource: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator: MatPaginator | any;

  FormUnidadTecnica: FormGroup;

  constructor(
    private service: UnidadTecnicaService,
    private dialog: MatDialog,
    private router: Router,
    public snackBar: MatSnackBar
    ) {

    }

  ngOnInit(): void {
    this.service.listarUnidadTercnica().subscribe((data:any) => {
      console.log(data);
      const ELEMENT_DATA: unidadTecnicaInterface[] =data.data;
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


  upgradeUnidadTecnica(unidadTecnica:unidadTecnicaInterface){
    this.dialog.open(TechnicalunitComponent,{
      data:unidadTecnica.idDptoTecnico
    })
  }

}
