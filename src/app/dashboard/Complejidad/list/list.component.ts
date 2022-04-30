import { FormGroup, FormBuilder } from '@angular/forms';
import { UpdateComponent } from './../update/update.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { complejidadInterface } from '../../interfaces/Complejidad/complejidadInterface';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { UnidadTecnicaService } from '../../services/unidadTecnica/Create/unidad-tecnica.service';

import { filter } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';
import { ListService } from '../../services/Complejidad/list/list.service';
import { MatSort } from '@angular/material/sort';

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

  displayedColumns: string[] = ['idComplejidad', 'nombre', 'Unidad', 'estado', 'action'];
  dataSource:any=[];

  estados: Food[] = [
    {value: 1, viewValue: 'Activo'},
    {value: 2, viewValue: 'Pasivo'}];
    selectedFood = this.estados[1].value;

  readonly formControl: FormGroup;
  @ViewChild(MatPaginator) paginator: MatPaginator | any;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private service: ListService,
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
  this.service.listarComplejidad().subscribe((data:any)=>{
    console.log(data);
    const ELEMENT_DATA: complejidadInterface[]=data.data;
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

  update(complejidad:complejidadInterface){

    this.dialog.open(UpdateComponent,{
     data:complejidad.idComplejidad

   })

 }
  clear() {
    this.formControl.reset();


  }

}
