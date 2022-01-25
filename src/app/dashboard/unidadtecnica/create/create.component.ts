import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { UnidadTecnicaService } from './../../services/unidadTecnica/Create/unidad-tecnica.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
interface Food {
  value: number;
  viewValue: string;
}


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  Estado: any[] = ['Activo', 'Pasivo'];
  FormUnidadTecnica: FormGroup;


  estados: Food[] = [
    {value: 1, viewValue: 'Activo'},
    {value: 2, viewValue: 'Inactivo'}];
    foodControl = new FormControl(this.estados[1]);


  toggle = true;
  status = 'Enable'

  constructor(private formBuilder: FormBuilder,
    private service: UnidadTecnicaService,
    private dialog: MatDialog,
    private router: Router,
    public snackBar: MatSnackBar) {
      this.FormUnidadTecnica=this.formBuilder.group({

         Nombre:['', Validators.required],
         Sigla:['', Validators.required],
         SecuenciaOT:[''],
         PrefijoControlCambios:[''],
         SecuenciaControlCambios:[''],
         Estado:[''],
         RespuestaOT:[''],
         Respuesta2:[''],
         Respuesta3:[''],
         Respuesta4:[''],
         Respuesta5:['']
       })
    }

  ngOnInit(): void {
    estado: this.foodControl
  }


  submit(){

    /*  const UnidadTecnica:unidadTecnicaInterface={
       IdDptoTecnico:this.FormUnidadTecnica.value.IdDptoTecnico,
       nombre:this.FormUnidadTecnica.value.nombre,
       sigla:this.FormUnidadTecnica.value.sigla,
       secuenciaOT:this.FormUnidadTecnica.value.secuenciaOT,
       PrefijoCC:this.FormUnidadTecnica.value.PrefijoCC,
       SecuenciaCC:this.FormUnidadTecnica.value.SecuenciaCC,
       estado:this.FormUnidadTecnica.value.estado,
       respuestaOT:this.FormUnidadTecnica.value.respuestaOT,
       repuesta2:this.FormUnidadTecnica.value.respuesta2,
       respuesta3:this.FormUnidadTecnica.value.repuesta3

     } */
     /* console.log(UnidadTecnica);
     this.service.createUnidadTecnica(UnidadTecnica);
     this.router.navigate[('/dashboard/unidadTecnica')] */
     /*  this.service.createUnidadTecnica(this.FormUnidadTecnica.value).subscribe((data:any)=>{
       console.log(data);
     }) */

     this.service.createUnidadTecnica(this.FormUnidadTecnica.value).subscribe((data:any)=>{
       console.log(data);
       //localStorage.setItem('userCode', data.result.userCode);
       this.snackBar.open('Creado Correctemante ', 'action', {
         duration: 4000,
         horizontalPosition: "start",
         verticalPosition: 'bottom',
       }).afterDismissed().subscribe(() => {
         window.location.reload();
         this.router.navigate(['/unidadtecnica'])
         console.log('xxxxxxxxxx');
       });

     /*   this._snackBar.open('Cannonball!!', 'Splash', {
         horizontalPosition: "start",
         verticalPosition: 'bottom',
       }); */

       //alerta lo que me esta devolviendo el backend
       //alert("fdfdfdfd");
       //ruta

     }

     )

   }

}