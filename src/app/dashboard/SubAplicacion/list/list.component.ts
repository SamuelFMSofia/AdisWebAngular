import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { ListService } from '../../services/SubAplicacion/list/list.service';
import { MatDialog } from '@angular/material/dialog';
import { UnidadTecnicaService } from '../../services/unidadTecnica/Create/unidad-tecnica.service';
import { filter } from 'rxjs';
import { subAplicacionInterface } from '../../interfaces/SubAplicacion/subAplicacionInterface';
import { MatTableDataSource } from '@angular/material/table';
import { UpdateComponent } from '../../SubAplicacion/update/update.component';

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

  displayedColumns: string[] = ['idSubAplica', 'nombre', 'Unidad', 'action'];
  dataSource:any=[];

  readonly formControl: FormGroup;
  @ViewChild(MatPaginator) paginator: MatPaginator | any;

  constructor(
    private service: ListService,
    private dialog: MatDialog,
    public unidad: UnidadTecnicaService,
    private formBuilder: FormBuilder,
  ) {
    this.formControl=formBuilder.group({
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
  this.service.listarSubAplicacion().subscribe((data:any)=>{
    console.log(data);
    const ELEMENT_DATA: subAplicacionInterface[]=data.data;
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

  update(subAplica: subAplicacionInterface){

    this.dialog.open(UpdateComponent,{
     data:subAplica.idSubAplica

   })

 }

 clear() {
  this.formControl.reset();
  this.ngOnInit();

}

}
