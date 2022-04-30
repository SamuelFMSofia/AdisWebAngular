import { ThemePalette } from '@angular/material/core';

import { unidadTecnicaInterface } from './../../interfaces/unidad_tecnica/unidadTecnicaInterface';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { MunidadtecnicaService } from '../../services/unidadTecnica/Modify/munidadtecnica.service';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig } from '@angular/material/dialog';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Component, OnInit, Inject } from '@angular/core';
import { UnidadTecnicaService } from '../../services/unidadTecnica/Create/unidad-tecnica.service';
import { CreateService } from '../../services/tipoOT/create/create.service';
import { ModifyService } from '../../services/tipoOT/modify/modify.service';
interface unidadTecnica{
  idDptoTecnico:number; nombre : string; sigla:string, estado:number
}
interface listarTipo{

     idTipoOT: number,
     nombre: string,
     tieneSubTipo:number,
      dptoTecnico: {
        idDptoTecnico: number,
        nombre: string,
        sigla: string
      },
      usuarioResponsable: {
        idUser: number,
        userCode: string,

        persona: {
          idPersona: number,
          numeroDocumento: string,
          nombreCompleto: string,

        }
      }
}
interface Food {
  value: number;
  viewValue: string;
}

interface usuarioInterface{
  idUser:number; persona:{nombreCompleto: string};
}

@Component({
  selector: 'app-modificar-tipo',
  templateUrl: './modificar-tipo.component.html',
  styleUrls: ['./../../style/stylesEdit.scss']

})
export class ModificarTipoComponent implements OnInit {
  fromTipo:FormGroup;
  idTipoOT:number;

  unidadTecnicas:unidadTecnica[]=[];


    usuarios:usuarioInterface[]=[];
    selectedUsuario:string;

  estados: Food[] = [
    {value: 1, viewValue: 'Activo'},
    {value: 2, viewValue: 'Pasivo'}]

    estadoCheck=false;
    color: ThemePalette = 'accent';
    disabled = false;


    aprobacionCheck=true;

    foodControl = new FormControl(this.estados[1]);
  constructor(
    private formBuilder: FormBuilder,
    private service: ModifyService,
    private unidad_tecnicas: UnidadTecnicaService,
    private router:Router,
    public snackBar: MatSnackBar,
    public listar: CreateService,
    public dialogRef: MatDialogRef<ModificarTipoComponent>,
    @Inject(MAT_DIALOG_DATA) public  _idTipoOT:number
  ) {

        this.fromTipo=formBuilder.group({
          nombre : [''],

          IdDptoTecnico: [''],
          IdUsrResponsable: [''],
          tieneSubTipo:[''],
          tieneAprobacion:[''],
          estado: [''],

          idTipoOT:['']
        })

  }

  ngOnInit(): void {
    estado: this.foodControl;
    console.log(this._idTipoOT);
    this.unidad_tecnicas.listarUnidadTercnica().subscribe((data1:any)=>{
      console.log(data1);
    this.unidadTecnicas=data1.data.filter(value => value.estado == 1);;
    });
    this.listar.listarTipos(this._idTipoOT).subscribe((data:any)=>{
      console.log(data);
      this.cargarusuario(data.data.dptoTecnico.idDptoTecnico);
this.fromTipo.patchValue(
  {
    idTipoOT: data.data.idTipoOT,
    nombre : data.data.nombre,
    IdDptoTecnico: data.data.dptoTecnico.idDptoTecnico,
    IdUsrResponsable:data.data.usuarioResponsable!=null? data.data.usuarioResponsable.idUser:0,
    tieneSubTipo: data.data.tieneSubTipo,
    tieneAprobacion:data.data.tieneAprobacion,
    estado: data.data.estado,
    });

    if(this.fromTipo.value.tieneSubTipo=="1"){
      this.estadoCheck=true;

    }else if (this.fromTipo.value.tieneSubTipo=="0"){
      this.estadoCheck=false;
    }

    console.log(this.fromTipo)

    if(this.fromTipo.value.tieneAprobacion=="1"){
      this.aprobacionCheck=true;

    }else if (this.fromTipo.value.tieneAprobacion=="0"){
      this.aprobacionCheck=false;
    }


    }


    )}


  cerrar(){
    this.dialogRef.close();
  }

  guardar(){

    this.fromTipo.value._idTipoOT=this._idTipoOT;
    this.service.modificarTipo(this._idTipoOT, this.fromTipo.value).subscribe((data)=>{
      //direcionaa ala pagina requerida

      this.snackBar.open('Modificado Correctamente ', 'action', {
        duration: 2000,
        horizontalPosition: "start",
        verticalPosition: 'bottom',
      }).afterDismissed().subscribe(() => {
        window.location.reload();
         this.router.navigateByUrl('/dashboard/tipoOT');


      });


    });
    //cerrar


  }

  cargarusuario(event:Event){
    this.unidad_tecnicas.listarUserUnidadTecnica(event).subscribe((data:any)=>{
      console.log(data);
      let result=data;
       if(result.status==1){
       this.usuarios=data.data.filter(value => value.estado == 1);
       }else{
        this.fromTipo.patchValue({IdUsrResponsable:0});
         this.usuarios=[]
       }

    })
  }
  onChangeEstado(enable: boolean) {
    if (enable) {
      this.estadoCheck=true;
      this.fromTipo.patchValue({tieneSubTipo:"1"});
    } else {
      this.estadoCheck=false;
      this.fromTipo.patchValue({tieneSubTipo:"0"});
    }
  }

  onChangeAdministrador(e) {
    if (e.target.checked==true) {
      this.aprobacionCheck=true;
      this.fromTipo.patchValue({tieneAprobacion:"1"});
    } else {
      this.aprobacionCheck=false;
      this.fromTipo.patchValue({tieneAprobacion:"0"});
    }
  }


}
