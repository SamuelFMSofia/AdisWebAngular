import { Router } from '@angular/router';

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UnidadTecnicaService } from '../../services/unidadTecnica/Create/unidad-tecnica.service';
import { NotificacionService } from '../../services/notificacion/notificacion.service';
import { CreateActividadService } from '../../services/Actividad/create/create-actividad.service';


interface Food {
  value: number;
  viewValue: string;
}

interface unidadTecnica{
  idDptoTecnico:number; nombre : string
}
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./../../style/styleCrear.scss'],
})
export class CreateComponent implements OnInit {
  Estado: any[] = ['Activo', 'Pasivo'];

  estados: Food[] = [
    {value: 1, viewValue: 'Activo'},
    {value: 2, viewValue: 'Pasivo'}];
    selectedFood = this.estados[1].value;

  FormActividad: FormGroup;
//unidad Tecnica
unidadTecnicas:unidadTecnica[]=[];

selectedUnidadTecnica:unidadTecnica={
  idDptoTecnico: 0,
  nombre: ''
};

  constructor(
    private formBuilder: FormBuilder,
    private service: CreateActividadService,
    private router:      Router,
    public snackbar: MatSnackBar,
    public unidad: UnidadTecnicaService,
    public notifyService: NotificacionService,
  ) {
    this.FormActividad=this.formBuilder.group({
      Nombre:['', Validators.required],
      IdDptoTecnico:['', Validators.required],
      estado:1,
    })
  }

  ngOnInit(): void {
    this.unidad.listarUnidadTercnica().subscribe((data:any)=>{
      console.log(data);
      let result=data.data;
      this.unidadTecnicas=result.filter(value => value.estado == 1);
    });
  }

  submit(){

  this.service.createActividad(this.FormActividad.value).subscribe((data:any)=>{
    console.log(data);
    //localStorage.setItem('userCode', data.result.userCode);
    this.showToasterSuccess()
      //window.location.reload();

      this.router.navigateByUrl('/dashboard/Actividad')
  })

  }

  cancelar(){
    this.snackbar.open('Cancelado ', 'action', {
      duration: 100,
      horizontalPosition: "start",
      verticalPosition: 'bottom',
    })
      //window.location.reload();
      this.router.navigate(['/dashboard/Actividad'])


  }

  showToasterSuccess() {
    this.notifyService.showSuccess(
      'Correctamente.."',
      'ACTIVIDAD CREADO..!'

    );
  }

}
