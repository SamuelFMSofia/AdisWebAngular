import { ListuoService } from './../../services/listuoService/listuo.service';
import { ModifypersonComponent } from './../modifyperson/modifyperson.component';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Component, Inject, OnInit } from '@angular/core';
import { MusersServiceService } from '../../services/musersService/musers-service.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


//cargo
declare var $:any;
declare var Jquery:any;

@Component({
  selector: 'app-modifyusers',
  templateUrl: './modifyusers.component.html',
  styleUrls: ['./modifyusers.component.scss']
})
export class ModifyusersComponent implements OnInit {

//unidad Tecnica
unidadTecnicas:any=[];
selectedTecnica:string;
//tipo usuario
tipoUsuarios:any=[];
selectedUsuario:string;
//perfil
perfiles:any=[];
selectedPerfil:string;
//cargos
cargos:any=[];
selectedCargo:string;
//empresa
empresas:any;
//gerencias
gerencias:any;
// locaciones
locaciones:any;
//sucursales
sucursales:any;


//inicializzacion de variables
  form: FormGroup;
  idUser:number;

  constructor(
    private formBuilder: FormBuilder,
    private service: MusersServiceService,
    private router: Router,
    public listaruo: ListuoService,

    private dialogRef: MatDialogRef <ModifyusersComponent>,
    @Inject(MAT_DIALOG_DATA) private data:{
       idUser			:number,
	    abreviatura		:string,
      estado				:string, //number
       unidadTecnica :{idDptoTecnico:number, nombre : string},
      tipoUsuario	:{id	:number, nombre: string},
      perfil        :{idPerfil :number, nombre :string, estado: string}


    }

  ) {

    this.idUser=data.idUser;

   this.form=formBuilder.group({
     idUser:[data.idUser],
    abreviatura:[data.abreviatura],
     estado:[data.estado],
    //unidadTecnicas:[data.unidadTecnica.nombre],
    tipoUsuarios:[data.tipoUsuario.nombre],
     perfiles:[data.perfil.nombre],
   })

    }

   /// this.form.controls.get("Empresa").setValue('abc');

   cerrar(){
    this.dialogRef.close();
  }
  guardar(){
     this.form.value.idUser=this.idUser;
    this.service.modifyUsers(this.idUser, this.form.value).subscribe((data)=>{
      //direcionaa ala pagina requerida
      this.router.navigate(['/listusers']);
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
    //this.unidadOrganizacionalesUO=data.data.unidadOrganizacionales;
    this.gerencias=data.data.gerencias;
    this.locaciones=data.data.locaciones;
    this.sucursales=data.data.sucursales;
    this.empresas=data.data.empresas;

  },)
  }


}
