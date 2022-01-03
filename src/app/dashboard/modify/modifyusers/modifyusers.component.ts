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

  form=new FormGroup({
    nombreCompleto:new FormControl,
    correo:new FormControl(),
    cargo:new FormControl(),
    UnidadOrg:new FormControl(),
    empresa:new FormControl(),
    gerencia:new FormControl(),
    locacion:new FormControl(),
    sucursal:new FormControl(),
  });
  numeroDocumento:string;
 // nombre_Completo: string;
  constructor(
    private formBuilder: FormBuilder,
    private service: MusersServiceService,
    private router: Router,
    public listaruo: ListuoService,
    
    private dialogRef: MatDialogRef <ModifyusersComponent>,
    @Inject(MAT_DIALOG_DATA) private data:{
      idPersona:number,
      numeroDocumento:string;
      nombreCompleto: string;
      correo : string;
      cargo: {id:string,nombre:string};
      password :string;
      unidadOrganizacional:{id: string
      nombre: string
      sigla: string};
      UnidadOrg : string;
      empresa: {id: null;
      nombre: string};
      gerencia: {id: null
        nombre: string};
      locacion: string;
      sucursal: string;
      aprobador:{nombre: string
      numeroDocumento: string};

    }
    
  ) {
    console.log(data);
   this.numeroDocumento=data.numeroDocumento;
   //this.nombre_Completo=data.nombre_Completo;
   this.form=formBuilder.group({
     idPersona:[data.idPersona],
     numeroDocumento:[data.numeroDocumento],
     nombreCompleto:[data.nombreCompleto],
     correo:[data.correo],
     cargo:[data.cargo.nombre],
     Password:[data.password],
     unidadOrganizacional:[data.unidadOrganizacional.sigla],
     UnidadOrg:[data.UnidadOrg],
     empresa:[data.empresa.nombre],
     gerencia:[data.gerencia.nombre],
     locacion:[data.locacion],
     sucursal:[data.sucursal],
     NombreAprobador:[data.aprobador.nombre]
     
   })
  
    }
  
   /// this.form.controls.get("Empresa").setValue('abc');

   cerrar(){
    this.dialogRef.close();
  }
  guardar(){
     this.form.value.numeroDocumento=this.numeroDocumento;
    this.service.modifyUsers(this.numeroDocumento, this.form.value).subscribe((data)=>{
      //direcionaa ala pagina requerida
      this.router.navigate(['listperson']);
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
    },)
  }


}
