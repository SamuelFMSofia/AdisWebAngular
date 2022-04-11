import { FormGroup, FormBuilder } from '@angular/forms';
import { UpdateComponent } from './../update/update.component';
import { Component, OnInit, ViewChild } from '@angular/core';

import { MatPaginator } from '@angular/material/paginator';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { UnidadTecnicaService } from '../../services/unidadTecnica/Create/unidad-tecnica.service';

import { filter } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';

import { MatSort } from '@angular/material/sort';
import { ListActividadService } from '../../services/Actividad/list/list-actividad.service';
import { actividadInterface } from '../../interfaces/Actividad/interfaceActividad';

interface Food {
  value: number;
  viewValue: string;
}


interface unidadTecnica{
  idDptoTecnico:number; nombre : string; sigla:string
}

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['../../style/styles.scss']
})
export class ListComponent implements OnInit {
  dptoTecnicos:unidadTecnica[]=[];

  displayedColumns: string[] = ['idActividad', 'nombre', 'Unidad', 'estado', 'action'];
  dataSource:any=[];

  estados: Food[] = [
    {value: 1, viewValue: 'Activo'},
    {value: 2, viewValue: 'Pasivo'}];
    selectedFood = this.estados[1].value;

  readonly formControl: FormGroup;
  @ViewChild(MatPaginator) paginator: MatPaginator | any;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    public _service: ListActividadService,
    private dialog: MatDialog,
    public unidad: UnidadTecnicaService,
    private formBuilder: FormBuilder,

  ) {
    this.formControl=formBuilder.group({
      nombre: '',
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
      console.log(this.dptoTecnicos)
  });
  this._service.listarActividad().subscribe((data:any)=>{
    console.log(data);
    const ELEMENT_DATA: actividadInterface[]=data.data;
    this.dataSource = new MatTableDataSource(ELEMENT_DATA);
    this.dataSource.paginator=this.paginator;
    this.dataSource.sort=this.sort;
    this.dataSource.filterPredicate = ((data, filter) => {
      const b = !filter.nombre || data.nombre.toLowerCase().includes(filter.nombre);
      const c = !filter.dptoTecnico_filter || data.dptoTecnico.idDptoTecnico === filter.dptoTecnico_filter;
      return b && c;
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

  update(actividad:actividadInterface){

    this.dialog.open(UpdateComponent,{
     data:actividad.idActividad

   })
 }


  clear() {
    this.formControl.reset();
    this.ngOnInit();

  }

}
