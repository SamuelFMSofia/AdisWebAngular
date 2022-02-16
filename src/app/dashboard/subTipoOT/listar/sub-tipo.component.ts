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

@Component({
  selector: 'app-sub-tipo',
  templateUrl: './sub-tipo.component.html',
  styleUrls: ['./sub-tipo.component.scss']
})
export class SubTipoComponent implements OnInit {
  Estado: any[] = ['Activo', 'Pasivo'];

  ELEMENT_DATA:listarSubtipo[]=[];


  displayedColumns: string[] = ['idSTipoOT','Nombre', 'IdDptoTecnico', 'tipo',  'Acciones'];
  dataSource: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator: MatPaginator | any;
  constructor(
    private service: CreateSubtipoService,
    private dialog: MatDialog,
    private router: Router,
    public snackBar: MatSnackBar,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {

    this.service.listarSubTiposOT().subscribe((data:any) => {
      console.log(data);
      const ELEMENT_DATA: listarSubtipo[] =  data.status==1?data.data:[];
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
     upgradeTipo(SubTipoOT:listarSubtipo){
       this.dialog.open(ModificarSubtipoComponent,{
        data:SubTipoOT.idSTipoOT
      })
    }

}
