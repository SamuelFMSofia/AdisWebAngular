import { Router } from '@angular/router';

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UnidadTecnicaService } from '../../services/unidadTecnica/Create/unidad-tecnica.service';
import { NotificacionService } from '../../services/notificacion/notificacion.service';
import { CreateService } from '../../services/Complejidad/create/create.service';

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

  FormComplejidad: FormGroup;
//unidad Tecnica
unidadTecnicas:unidadTecnica[]=[];

selectedUnidadTecnica:unidadTecnica={
  idDptoTecnico: 0,
  nombre: ''
};

  constructor(
    private formBuilder: FormBuilder,
    private service: CreateService,
    private router:      Router,
    public snackbar: MatSnackBar,
    public unidad: UnidadTecnicaService,
    public notifyService: NotificacionService,
  ) { 
    this.FormComplejidad=this.formBuilder.group({
      Nombre:['', Validators.required],
      IdDptoTecnico:['', Validators.required],
      dias:[''],
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

  this.service.createComplejidad(this.FormComplejidad.value).subscribe((data:any)=>{
    console.log(data);
    //localStorage.setItem('userCode', data.result.userCode);
    this.showToasterSuccess()
      //window.location.reload();

      this.router.navigateByUrl('/dashboard/Complejidad')
  })

  }

  cancelar(){
    this.snackbar.open('Cancelado ', 'action', {
      duration: 100,
      horizontalPosition: "start",
      verticalPosition: 'bottom',
    })
      //window.location.reload();
      this.router.navigate(['/dashboard/Complejidad'])

    
  }
 
  showToasterSuccess() {
    this.notifyService.showSuccess(
      'Correctamente.."',
      'COMPLEJIDAD CREADO..!'
     
    );
  }

}
