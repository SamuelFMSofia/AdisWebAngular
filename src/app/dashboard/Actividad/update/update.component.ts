import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { UnidadTecnicaService } from '../../services/unidadTecnica/Create/unidad-tecnica.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UpdateActividadService } from '../../services/Actividad/update/update-actividad.service';
import { NotificacionService } from '../../services/notificacion/notificacion.service';


interface unidadTecnica{
  idDptoTecnico:number; nombre : string;
}

interface Food {
  value: number;
  viewValue: string;
}

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./../../style/stylesEdit.scss']
})
export class UpdateComponent implements OnInit {


  fromActividad:FormGroup;
  idActividad:number;

  unidadTecnicas:unidadTecnica[]=[];

  selectedUnidadTecnica:unidadTecnica={
    idDptoTecnico: 0,
    nombre: ''
  };

  estados: Food[] = [
    {value: 1, viewValue: 'Activo'},
    {value: 2, viewValue: 'Pasivo'}]

  constructor(
    private formBuilder: FormBuilder,
    private service: UpdateActividadService,
    private unidad_tecnicas: UnidadTecnicaService,
    private router:Router,
    public snackBar: MatSnackBar,
    public notificacion: NotificacionService,
    public dialogRef: MatDialogRef<UpdateComponent>,
    @Inject(MAT_DIALOG_DATA) public  _idComplejidad:number
  ) {
    this.fromActividad=formBuilder.group({
      nombre : [''],
      IdDptoTecnico: [''],
      estado: [''],

      idActividad:['']
    })
   }

  ngOnInit(): void {
    this.unidad_tecnicas.listarUnidadTercnica().subscribe((data1:any)=>{
      console.log(data1);
    this.unidadTecnicas=data1.data.filter(value => value.estado == 1);;
    });
    this.service.getActividad(this._idComplejidad).subscribe((data:any)=>{
      this.fromActividad.patchValue({
        idActividad:data.data.idActividad,
        nombre:data.data.nombre,
        IdDptoTecnico: data.data.dptoTecnico.idDptoTecnico,
        estado: data.data.estado,
      })
    })
  }

  cerrar(){
    this.dialogRef.close();
  }

  guardar(){

    this.fromActividad.value._idComplejidad=this._idComplejidad;
    this.service.modificarActividad(this._idComplejidad, this.fromActividad.value).subscribe((data)=>{
      //direcionaa ala pagina requerida

      this.showToasterWarning();
       
         



    });

  }

  showToasterWarning() {
    this.notificacion.showWarning(
      'Correctamente.."',
      'MODIFICADO CORRECTAMENTE..!'

    );

  }

}
