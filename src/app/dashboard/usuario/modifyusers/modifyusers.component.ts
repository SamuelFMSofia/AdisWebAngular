import { MatSnackBar } from '@angular/material/snack-bar';


import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Component, Inject, OnInit } from '@angular/core';
import { MusersServiceService } from '../../services/usuarios/musersService/musers-service.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UnidadTecnicaService } from '../../services/unidadTecnica/Create/unidad-tecnica.service';

interface Food {
  value: number;
  viewValue: string;
}

interface tipoUsuariosInterface{
  id	:number; nombre: string
}

interface unidadTecnica{
  idDptoTecnico:number; nombre : string; sigla:string
}

interface perfil{
  idPerfil :number; nombre :string; estado: number
}


@Component({
  selector: 'app-modifyusers',
  templateUrl: './modifyusers.component.html',
  styleUrls: ['./modifyusers.component.scss'],
  providers:[UnidadTecnicaService]
})
export class ModifyusersComponent implements OnInit {

  estados: Food[] = [
    {value: 1, viewValue: 'Activo'},
    {value: 2, viewValue: 'Pasivo'}]

    foodControl = new FormControl(this.estados[1]);

//unidad Tecnica
        unidadTecnicas:unidadTecnica[]=[];

        selectedUnidadTecnica:unidadTecnica={
          idDptoTecnico: 0,
          nombre: '',
          sigla: ''
        };
//tipo usuario
          tiposUsuarios:tipoUsuariosInterface[]=[
          {id	:1, nombre: 'SUPER USUARIO'},
          {id	:2, nombre: 'ADMIN' },
          {id	:3, nombre: 'APROBADOR'},
          {id	:4, nombre: 'TECNICO'},
          {id	:5, nombre: 'ELABORADOR'}
        ];
        selectedTiposUsuarios:tipoUsuariosInterface;
//perfil
          perfiles:perfil[]=[
            {idPerfil	:1, nombre: 'SUPER USUARIO', estado: 1},
            {idPerfil	:2, nombre: 'ADMIN', estado: 1},
            {idPerfil	:3, nombre: 'APROBADOR', estado: 1},
            {idPerfil	:4, nombre: 'TECNICO', estado: 1},
            {idPerfil	:5, nombre: 'ELABORADOR', estado: 1}
          ];
          selectedPerfil:string;
//cargos



//inicializzacion de variables
  form: FormGroup;
  idUser:number;

  constructor(
    private formBuilder: FormBuilder,
    private service: MusersServiceService,
    private router: Router,
    public snackBar: MatSnackBar,
    public unidad_tecnicas: UnidadTecnicaService,
    public dialogRef: MatDialogRef <ModifyusersComponent>,
    @Inject(MAT_DIALOG_DATA) public data:{
  	    abreviatura		:string,
        estado				:number, //number
        dptoTecnico :{idDptoTecnico:number, nombre : string, sigla: string},
        tipoUsuario	      :{id	:number, nombre: string},
        perfil        :{idPerfil :number, nombre :string, estado: number},
        idUser			:number

    }

  ) {

    this.idUser=data.idUser;
    this.selectedUnidadTecnica=data.dptoTecnico;
    this.selectedTiposUsuarios =data.tipoUsuario;
    this.form=formBuilder.group({
    idUser:[data.idUser],
    abreviatura:[data.abreviatura],
    estado:[data.estado],
    unidadTecnica:[data.dptoTecnico],
    tipoUsuario:[data.tipoUsuario],
    perfil:[data.perfil],
   })

    }

    cerrar(){
      this.dialogRef.close();
    }

  guardar(){
     this.form.value.idUser=this.idUser;
     let dataSend:any;
     let selectedItemTiposUsuarios:any;
     selectedItemTiposUsuarios=this.tiposUsuarios.filter(item=> item.id== this.form.value.tipoUsuario)[0];
     dataSend=this.form.value;
     dataSend.tipoUsuario=selectedItemTiposUsuarios;
     this.service.modifyUsers(this.idUser, dataSend).subscribe((data:any)=>{
      //direcionaa ala pagina requerida

      this.snackBar.open('Modificado Correctamente ', 'action', {
        duration: 1000,
        horizontalPosition: "start",
        verticalPosition: 'bottom',
      }).afterDismissed().subscribe(() => {

        this.router.navigate(['/listusers']);

      });

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
        this.unidad_tecnicas.listarUnidadTercnica().subscribe((data:any)=>{
          //direcionaa ala pagina requerida
          console.log(data)
         this.unidadTecnicas=data.data;
        }
        );
      }
}
