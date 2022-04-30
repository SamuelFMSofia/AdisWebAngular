import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, startWith, debounceTime, distinctUntilChanged, switchMap, map } from 'rxjs';
import { MpersonServiceService } from '../../services/personas/mpersonService/mperson-service.service';
import { ListuoService } from '../../services/usuarios/listuoService/listuo.service';

import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Component, Inject, OnInit } from '@angular/core';
import { MusersServiceService } from '../../services/usuarios/musersService/musers-service.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EditPerfilService } from '../../services/personas/EditPerfil/edit-perfil.service';



interface gerenciaInterface{
  id :number,
        nombre: string,
        gerencia :string

}

interface empresaInterface{
  id: number;
  nombre: string;
  estado: string
}

interface unidadOrganizacionalInterface{
  id :number;
  nombre :string;
  sigla :string
}

interface cargoInterface{
  id :number;
  nombre :string

}



@Component({
  selector: 'app-edit-person-perfil',
  templateUrl: './edit-person-perfil.component.html',
  styleUrls: ['./edit-person-perfil.component.scss']
})
export class EditPersonPerfilComponent implements OnInit {


//cargos
cargos:cargoInterface[]=[];
selectedCargos:cargoInterface={
  id: 0,
  nombre: ''
};
//empresa
//empresita:any;
//empresas:empresaInterface[]=[];

//options2: empresaInterface[] = [];
//selectedEmpresas:string;

selectedEmpresas:empresaInterface={
  id: 0,
  nombre: '',
  estado: ''
};
empresas: empresaInterface[]=[];


//gerencias
gerencias:gerenciaInterface[]=[];

selectedGerencias:gerenciaInterface={
  id: 0,
  nombre: '',
  gerencia: ''
};
// locaciones

locaciones:any[]=[];
selectedLocacion:string;



//sucursales
sucursales:any=[];
selectedSucursal:string;
//aprobador


//unidad uo
unidadOrganizacionales:unidadOrganizacionalInterface[]=[];
selectedUnidadOrganizacionales:unidadOrganizacionalInterface={
  id: 0,
  nombre: '',
  sigla: ''
};


  form: FormGroup;



  constructor(
    private formBuilder: FormBuilder,
    private service: MpersonServiceService,
    private router: Router,
    public listaruo: ListuoService,
    public editPerfil: EditPerfilService,
    public snackBar: MatSnackBar,

    //defino los datos que estos recibiendo

  )

  {

   //this.nombre_Completo=data.nombre_Completo;
   this.form=formBuilder.group({
     //digito los cambios que se van a realizar

     locacion:[''],
     sucursal:[''],

     empresa: [''],
     gerencia:[''],
     unidadOrganizacional:[''],
     cargo:[''],
     idPersona:0


   })
  }

  ngOnInit(): void {
    this.listaruo.getlistUo().subscribe((data:any)=>{
      console.log(data);

      this.cargos=data.data.cargos;
      this.unidadOrganizacionales=data.data.unidadOrganizacionales;
      this.gerencias=data.data.gerencias;
      this.locaciones=data.data.locaciones;

      this.sucursales=data.data.sucursales;
      this.empresas=data.data.empresas;

    })
    
      let numeroDocumento:string;
      numeroDocumento=localStorage.getItem("userCode") as string;
      console.log(numeroDocumento)
      this.editPerfil.findperson(numeroDocumento).subscribe((data:any)=>{
        console.log(data);
       this.form.patchValue({
       locacion : data.data.locacion,
       sucursal: data.data.sucursal,
       empresa:data.data.empresa.nombre,
      // gerencia:data.data.gerencia.nombre,
       //unidadOrganizacional:data.data.unidadOrganizacional.nombre,
       //cargo:data.data.cargo.nombre,
       
       })
       
      
        })
      }


    onSubmit(){
      let idPersona:number =0;
      idPersona=parseInt(localStorage.getItem("idPersona") as string);
       this.editPerfil.modifyPerfil(idPersona, this.form.value).subscribe((data:any)=>{
      
    })
    }


}
