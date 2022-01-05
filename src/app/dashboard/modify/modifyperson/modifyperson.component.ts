import { MpersonServiceService } from './../../services/mpersonService/mperson-service.service';
import { ListuoService } from './../../services/listuoService/listuo.service';

import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Component, Inject, OnInit } from '@angular/core';
import { MusersServiceService } from '../../services/musersService/musers-service.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

interface aprobador {
  value: string;
  nombre: string;
}
//cargo
declare var $:any;
declare var Jquery:any;

@Component({
  selector: 'app-modifyperson',
  templateUrl: './modifyperson.component.html',
  styleUrls: ['./modifyperson.component.scss']
})
export class ModifypersonComponent implements OnInit {

//cargos
cargos:any=[];
selectedCargo:string;
//empresa
empresas:any=[];
selectedEmpresas:string;
//gerencias
gerencias:any=[];
selectedGerencia:string;
// locaciones
locaciones:any=[];
selectedLocacion:string;
//sucursales
sucursales:any=[];
selectedSucursal:string;
//aprobador

selectedAprobador:string;
//unidad uo
unidadOrganizacionalesUO:string
selectedUO:any=[];


  form: FormGroup;
  idPersona:number;

  constructor(
    private formBuilder: FormBuilder,
    private service: MpersonServiceService,
    private router: Router,
    public listaruo: ListuoService,

    private dialogRef: MatDialogRef <ModifypersonComponent>,
    //defino los datos que estos recibiendo
    @Inject(MAT_DIALOG_DATA) private data:{
      idPersona:number,
      correo : string,
      locacion: string,
      sucursal: {id:number, nombre:string},
      estado:string,
      aprobador:{userCode:string, nombre:string},
      empresa: {id: number,
        nombre: string, estado:string},
      gerencia: {id: number,
          nombre: string, gerencia:string},
      unidadOrganizacional:{id: string,
            nombre: string, sigla: string},
      cargo: {id:string,nombre:string}


    }

  ) {
   this.idPersona =data.idPersona;
   //this.nombre_Completo=data.nombre_Completo;
   this.form=formBuilder.group({
     //digito los cambios que se van a realizar
     idPersona:[data.idPersona],

     correo:[data.correo],
     locacion:[data.locacion],
     sucursales:[data.sucursal.nombre],
     estado:[data.estado],
     aprobador:[data.aprobador.nombre],
     empresa: [data.empresa],
     gerencia:[data.gerencia.nombre],
     unidadOrganizacional:[data.unidadOrganizacional.sigla],
     cargo:[data.cargo.nombre]

   })

    }

   /// this.form.controls.get("Empresa").setValue('abc');

   cerrar(){
    this.dialogRef.close();
  }
  guardar(){
     this.form.value.idPersona=this.idPersona;
    this.service.modifyPerson(this.idPersona, this.form.value).subscribe((data)=>{
      //direcionaa ala pagina requerida
      this.router.navigate(['/listperson']);
      window.location.reload();
     });
    //cerrar
    this.dialogRef.close();
  }
/*

  onSubmit() {

    this.service.modifyUsers(this.form.value).subscribe((data:any)=>{
      console.log(data);
      this.router.navigate(['dashboard'])
    })
    console.log(this.form.value);
} */
ngOnInit(): void {
  this.listaruo.getlistUo().subscribe((data:any)=>{
    console.log(data);
    this.cargos=data.data.cargos;
    this.unidadOrganizacionalesUO=data.data.unidadOrganizacionales;
    this.gerencias=data.data.gerencias;
    this.locaciones=data.data.locaciones;
    this.sucursales=data.data.sucursales;
    this.empresas=data.data.empresas;

  },)
  }

  //aprobador
aprobadores:aprobador[] = [
  {value: 'sistemas', nombre: 'xxx'},
  {value: 'rrhh', nombre: 'yyyyy'},
  {value: 'comunicacion', nombre: 'zzzzz'},
];

}
