import { MatSnackBar } from '@angular/material/snack-bar';
import { ListuoService } from '../../services/usuarios/listuoService/listuo.service';
import { ModifypersonComponent } from '../../persona/modifyperson/modifyperson.component';
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

interface tipoUsuario{
  id	:number; nombre: string
}

interface unidadTecnica{
  IdDptoTecnico:number; nombre : string; sigla:string
}

interface perfil{
  idPerfil :number; nombre :string; estado: number
}
//cargo
declare var $:any;
declare var Jquery:any;

@Component({
  selector: 'app-modifyusers',
  templateUrl: './modifyusers.component.html',
  styleUrls: ['./modifyusers.component.scss']
})
export class ModifyusersComponent implements OnInit {

  estados: Food[] = [
    {value: 1, viewValue: 'Activo'},
    {value: 2, viewValue: 'Inactivo'}]

    foodControl = new FormControl(this.estados[1]);

//unidad Tecnica
unidadTecnicas:unidadTecnica[]=[];
selectedTecnica:string;
//tipo usuario
tipoUsuarios:tipoUsuario[]=[
  {id	:1, nombre: 'SUPER USUARIO'},
  {id	:2, nombre: 'ADMIN'},
  {id	:3, nombre: 'APROBADOR'},
  {id	:4, nombre: 'TECNICO'},
  {id	:5, nombre: 'ELABORADOR'}
];
selectedUsuario:string;
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
    public listaruo: ListuoService,
    public snackBar: MatSnackBar,
    public unidad: UnidadTecnicaService,
    private dialogRef: MatDialogRef <ModifyusersComponent>,
    @Inject(MAT_DIALOG_DATA) private data:{
       idUser			:number,
	    abreviatura		:string,
      estado				:number, //number
       unidadTecnica :{IdDptoTecnico:number, nombre : string, sigla: string},
      tipoUsuario	:{id	:number, nombre: string},
      perfil        :{idPerfil :number, nombre :string, estado: number}


    }

  ) {

    this.idUser=data.idUser;

   this.form=formBuilder.group({
     idUser:[data.idUser],
    abreviatura:[data.abreviatura],
     estado:[data.estado],
    unidadTecnica:[data.unidadTecnica],
    tipoUsuario:[data.tipoUsuario],
     perfil:[data.perfil],
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

      this.snackBar.open('Modificado Correctamente ', 'action', {
        duration: 2000,
        horizontalPosition: "start",
        verticalPosition: 'bottom',
      }).afterDismissed().subscribe(() => {
        
        this.router.navigate(['/listusers']);
      window.location.reload();
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
  this.unidad.listarUnidadTercnica().subscribe((data:any)=>{
    //direcionaa ala pagina requerida
    console.log(data)
   this.unidadTecnicas=data.data;
  }
  );
  }
}
