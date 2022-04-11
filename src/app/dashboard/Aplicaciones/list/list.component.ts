/* import { UpdateComponent } from './../../Aplicaciones/update/update.component'; */

import { UpdateComponent } from './../update/update.component';
import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ListAService } from '../../services/Aplicacion/list/listA.service';
import { ListService } from '../../services/SubAplicacion/list/list.service';
import { MatDialog } from '@angular/material/dialog';
import { UnidadTecnicaService } from '../../services/unidadTecnica/Create/unidad-tecnica.service';
import { filter } from 'rxjs';
import { aplicacionInterface } from '../../interfaces/Aplicacion/aplicacionInterface';
import { MatTableDataSource } from '@angular/material/table';
import { aplicacionesInterface } from '../../interfaces/Aplicaciones/aplicacionesInterface';
import { Router } from '@angular/router';
import { MatSort } from '@angular/material/sort';

interface unidadTecnica{
  idDptoTecnico:number; nombre : string; sigla:string
}
interface Food {
  value: number;
  viewValue: string;
}

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['../../style/styles.scss']
})
export class ListComponent implements OnInit {

  dptoTecnicos:unidadTecnica[]=[];

  displayedColumns: string[] = ['idAplica', 'nombre', 'Unidad', 'estado', 'action'];
  dataSource:any=[];

  estados: Food[] = [
    {value: 1, viewValue: 'Activo'},
    {value: 2, viewValue: 'Pasivo'}];
    selectedFood = this.estados[1].value;

  readonly formControl: FormGroup;
  @ViewChild(MatPaginator) paginator: MatPaginator | any;
  @ViewChild(MatSort) sort: MatSort;


  constructor(
    private service: ListAService,
    private dialog: MatDialog,
    public unidad: UnidadTecnicaService,
    public listSubAplica : ListService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.formControl=formBuilder.group({
      idAplica:'',
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
        console.log(this.dptoTecnicos)
    });

    this.service.listarAplicacion().subscribe((data:any)=>{
      console.log(data);
      const ELEMENT_DATA: aplicacionInterface[]=data.data;
      this.dataSource = new MatTableDataSource(ELEMENT_DATA);
      this.dataSource.paginator=this.paginator;
      this.dataSource.sort=this.sort;
      this.dataSource.filterPredicate = ((data, filter) => {
        const a = !filter.idTipoOT || data.idTipoOT === filter.idTipoOT;
        const b = !filter.nombre || data.nombre.toLowerCase().includes(filter.nombre);
        const c = !filter.dptoTecnico_filter || data.dptoTecnico.idDptoTecnico === filter.dptoTecnico_filter;
        return a && b && c;
      }) as (PeriodicElement, string) => boolean;
    });

    this.listSubAplica.listarSubAplicacion().subscribe((data:any)=>{


   localStorage.setItem('myArray', JSON.stringify(data))

     });

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  update(){

    this.router.navigateByUrl['../EditAplicaciones']    

 }

 clear() {
  this.formControl.reset();
  this.ngOnInit();

}
}
