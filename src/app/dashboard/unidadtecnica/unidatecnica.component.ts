import { Router } from '@angular/router';
import { unidadTecnicaInterface } from './../interfaces/unidadTecnicaInterface';
import { MatTableDataSource } from '@angular/material/table';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { UnidadTecnicaService } from '../services/unidadTecnica/unidad-tecnica.service';




@Component({
  selector: 'app-unidatecnica',
  templateUrl: './unidatecnica.component.html',
  styleUrls: ['./unidatecnica.component.scss']
})
export class UnidatecnicaComponent implements OnInit {
  Estado: any[] = ['Activo', 'Pasivo'];

  ELEMENT_DATA:unidadTecnicaInterface[]=[];

  displayedColumns: string[] = ['nombre', 'sigla', 'SecuenciaOT', 'estado', 'Acciones'];
  dataSource: MatTableDataSource<any>;


  FormUnidadTecnica: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private service: UnidadTecnicaService,
    private router: Router
    ) {
      this.FormUnidadTecnica=this.formBuilder.group({
      //  IdDptoTecnico:[''],
        nombre:['', Validators.required],
        sigla:['', Validators.required],
        SecuenciaOT:[''],
        //PrefijoCC:[''],
       // SecuenciaCC:[''],
        estado:[''],
      })

    }

  ngOnInit(): void {
    this.cargarUnidadTecnica();
  }
  cargarUnidadTecnica(){
    this.ELEMENT_DATA=this.service.listarUnidadTercnica();
    this.dataSource=new MatTableDataSource(this.ELEMENT_DATA);
  }

  submit(){

    const UnidadTecnica:unidadTecnicaInterface={
      nombre:this.FormUnidadTecnica.value.nombre,
      sigla:this.FormUnidadTecnica.value.sigla,
      SecuenciaOT:this.FormUnidadTecnica.value.SecuenciaOT,
      estado:this.FormUnidadTecnica.value.estado
    }
    console.log(UnidadTecnica);
    this.service.createUnidadTecnica(UnidadTecnica);
    this.router.navigate[('/dashboard/unidadTecnica')]
    /*  this.service.createUnidadTecnica(this.FormUnidadTecnica.value).subscribe((data:any)=>{
      console.log(data);
    }) */
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  upgradeUnidadTecnica(unidadTecnica:unidadTecnicaInterface){

  }

}
