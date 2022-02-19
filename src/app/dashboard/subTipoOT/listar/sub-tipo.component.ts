import { filter } from 'rxjs';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ModificarSubtipoComponent } from './../modificar/modificar-subtipo.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit, ViewChild } from '@angular/core';
import { listarSubtipo } from '../../interfaces/subtipoOT/listar';
import { CreateSubtipoService } from '../../services/subTipoOT/create/create-subtipo.service';
import { UnidadTecnicaService } from '../../services/unidadTecnica/Create/unidad-tecnica.service';
interface unidadTecnica{
  idDptoTecnico:number; nombre : string; sigla:string
}

const ELEMENT_DATA:listarSubtipo[]=[];

@Component({
  selector: 'app-sub-tipo',
  templateUrl: './sub-tipo.component.html',
  styleUrls: ['./../../style/styles.scss']
})
export class SubTipoComponent implements OnInit {
  Estado: any[] = ['Activo', 'Pasivo'];

  nombre = '';

  dptoTecnicos:unidadTecnica[]=[];
  dataSource:any=[];


  displayedColumns: string[] = ['idSTipoOT','Nombre', 'IdDptoTecnico', 'tipo',  'Acciones'];

  readonly formControl: FormGroup;

  @ViewChild(MatPaginator) paginator: MatPaginator | any;
  constructor(
    private service: CreateSubtipoService,
    private dialog: MatDialog,
    public unidad: UnidadTecnicaService,
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

    this.service.listarSubTiposOT().subscribe((data:any) => {
      console.log(data);
      const ELEMENT_DATA: listarSubtipo[] =  data.status==1?data.data:[];
      this.dataSource = new MatTableDataSource(ELEMENT_DATA);
      this.dataSource.paginator=this.paginator;

      this.dataSource.filterPredicate = ((data, filter) => {
        const a = !filter.idTipoOT || data.idTipoOT === filter.idTipoOT;
        const b = !filter.nombre || data.nombre.toLowerCase().includes(filter.nombre);
        const c = !filter.dptoTecnico_filter || data.dptoTecnico.idDptoTecnico === filter.dptoTecnico_filter;
        return a && b && c;
      }) as (PeriodicElement, string) => boolean;
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
     upgradeTipo(SubTipoOT:listarSubtipo){
       this.dialog.open(ModificarSubtipoComponent,{
        data:SubTipoOT.idSTipoOT
      })
    }

    clear() {
      this.formControl.reset();
      this.ngOnInit();
      
    }

}
