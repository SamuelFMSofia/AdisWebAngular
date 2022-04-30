import { MatSnackBar } from '@angular/material/snack-bar';


import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Component, Inject, OnInit } from '@angular/core';
import { MusersServiceService } from '../../services/usuarios/musersService/musers-service.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UnidadTecnicaService } from '../../services/unidadTecnica/Create/unidad-tecnica.service';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';
import { NotificacionService } from '../../services/notificacion/notificacion.service';

interface Food {
  value: number;
  viewValue: string;
}

interface tipoUsuariosInterface{
  id	:number; nombre: string
}

interface unidadTecnica{
  idDptoTecnico:number; nombre : string;
}

interface perfilInterface{
  idPerfil :number; nombre :string; estado: number
}


@Component({
  selector: 'app-modifyusers',
  templateUrl: './modifyusers.component.html',
  styleUrls: ['./../../style/stylesEdit.scss'],
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
          nombre: ''
        };
//tipo usuario
          tiposUsuarios:tipoUsuariosInterface[]=[
          {id	:1, nombre: 'SUPER USER'},
          {id	:2, nombre: 'ADMIN' },
          {id	:3, nombre: 'APROBADOR'},
          {id	:4, nombre: 'TECNICO'},
          {id	:5, nombre: 'ELABORADOR'}
        ];
        selectedTiposUsuarios:tipoUsuariosInterface;
//perfil
          perfiles:perfilInterface[]=[
            {idPerfil	:1, nombre: 'PERFIL BASICO SUPER USER', estado: 1},
            {idPerfil	:2, nombre:  'PERFIL BASICO ADMIN', estado: 1},
            {idPerfil	:3, nombre: 'PERFIL BASICO APROBADOR', estado: 1},
            {idPerfil	:4, nombre: 'PERFIL BASICO TECNICO', estado: 1},
            {idPerfil	:5, nombre: 'PERFIL BASICO ELABORADOR', estado: 1}
          ];
          selectedPerfiles:perfilInterface;



//inicializzacion de variables
  form: FormGroup;
  idUser:number;

  constructor(
    private formBuilder: FormBuilder,
    private service: MusersServiceService,
    private router: Router,
    public snackBar: MatSnackBar,
    public unidad_tecnicas: UnidadTecnicaService,
    public notificacion: NotificacionService,
    public dialogRef: MatDialogRef <ModifyusersComponent>,
    @Inject(MAT_DIALOG_DATA) public data:{
  	    abreviatura		:string,
        estado				:number, //number
        dptoTecnico :{idDptoTecnico:number, nombre : string},
        tipoUsuario	      :{id	:number, nombre: string},
        perfil        :{idPerfil :number, nombre :string, estado: number},
        idUser			:number

    }

  ) {

    this.idUser = data.idUser;
    this.selectedUnidadTecnica = data.dptoTecnico;
    this.selectedTiposUsuarios = data.tipoUsuario;
    this.selectedPerfiles = data.perfil;
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
     let selectedItemUnidadtecnica:any;
     let selectedItemTiposUsuarios:any;
     let selectedItemPerfiles: any;

     selectedItemUnidadtecnica=this.unidadTecnicas.filter(item=> item.idDptoTecnico == this.form.value.unidadTecnica)[0];
     selectedItemTiposUsuarios=this.tiposUsuarios.filter(item1=> item1.id== this.form.value.tipoUsuario)[0];
     selectedItemPerfiles=this.perfiles.filter(item2=>item2.idPerfil == this.form.value.perfil)[0];

     dataSend=this.form.value;

     dataSend.unidadTecnica=selectedItemUnidadtecnica;
     dataSend.tipoUsuario=selectedItemTiposUsuarios;
     dataSend.perfil=selectedItemPerfiles;

     this.service.modifyUsers(this.idUser, dataSend).subscribe((data:any)=>{
      //direcionaa ala pagina requerida

    this.showToasterWarning();

     })
     this.cerrar();

  }

      ngOnInit(): void {
        this.unidad_tecnicas.listarUnidadTercnica().subscribe((data:any)=>{
          //direcionaa ala pagina requerida
          console.log(data)
         this.unidadTecnicas=data.data;
        }
        );
      }

      showToasterWarning() {
        this.notificacion.showWarning(
          'Correctamente.."',
          'USUARIO MODIFICADO..!'
    
        );
    
      }
}
