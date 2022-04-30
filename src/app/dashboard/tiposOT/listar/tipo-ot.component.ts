import { filter } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ModificarTipoComponent } from './../modificar/modificar-tipo.component';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { listarTipoOT } from './../../interfaces/tipoOT/listar';
import { Component, OnInit, ViewChild } from '@angular/core';
import { CreateService } from '../../services/tipoOT/create/create.service';
import { UnidadTecnicaService } from '../../services/unidadTecnica/Create/unidad-tecnica.service';
interface unidadTecnica{
  idDptoTecnico:number; nombre : string; sigla:string
}

const ELEMENT_DATA:listarTipoOT[]=[];

@Component({
  selector: 'app-tipo-ot',
  templateUrl: './tipo-ot.component.html',
  styleUrls: ['../../style/styles.scss']
})
export class TipoOTComponent implements OnInit {
  Estado: any[] = ['Activo', 'Pasivo'];
  /*  filter */
  

  dptoTecnicos:unidadTecnica[]=[];
  dataSource:any=[];

  displayedColumns: string[] = ['idTipoOT','Nombre', 'idDptoTecnico' , 'usuarioResponsable',  'Acciones'];

  @ViewChild(MatPaginator) paginator: MatPaginator | any;

  readonly formControl: FormGroup;
  constructor(
    private service: CreateService,
    public unidad: UnidadTecnicaService,
    private dialog: MatDialog,
    public snackBar: MatSnackBar,
    private formBuilder: FormBuilder
  ) { 

    this.formControl = formBuilder.group({
      nombre: '',
      idTipoOT: '',
      dptoTecnico_filter: '',
    }) 
     this.formControl.valueChanges.subscribe(value => {
      const filter = {...value, nombre: value.nombre.trim().toLowerCase()} as string;

      this.dataSource.filter = filter;
    });
 
  }

  ngOnInit(): void {
     this.unidad.listarUnidadTercnica().pipe(
      filter(value=> value != 1)
    ).subscribe((data:any)=>{

      this.dptoTecnicos=data.data;
  }); 
     this.service.listarTiposOT().subscribe((data:any)=>{
      const ELEMENT_DATA: listarTipoOT[]=data.status==1?data.data:[];
    console.log(ELEMENT_DATA);
      this.dataSource = new MatTableDataSource(ELEMENT_DATA);
      this.dataSource.paginator=this.paginator;
      this.dataSource.filterPredicate = ((data, filter) => {
        const a = !filter.idTipoOT || data.idTipoOT === filter.idTipoOT;
        const b = !filter.nombre || data.nombre.toLowerCase().includes(filter.nombre);
        const c = !filter.dptoTecnico_filter || data.dptoTecnico.idDptoTecnico === filter.dptoTecnico_filter;
        return a && b && c;
      }) as (PeriodicElement, string) => boolean; 
     })

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
      data:tipo.idTipoOT
     
    })
   
  }
  clear() {
    this.formControl.reset();
    this.ngOnInit();
    
  }

}
