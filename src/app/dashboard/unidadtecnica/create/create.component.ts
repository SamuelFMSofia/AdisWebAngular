import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { UnidadTecnicaService } from './../../services/unidadTecnica/Create/unidad-tecnica.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { NotificacionService } from '../../services/notificacion/notificacion.service';
interface Food {
  value: number;
  viewValue: string;
}


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
  providers:[NotificacionService]
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
  /**************** */
  aprobacionCheck=false;
  /****************************** */
  constructor(private formBuilder: FormBuilder,
    private service: UnidadTecnicaService,
    private dialog: MatDialog,
    private router: Router,
    private notifyService: NotificacionService,
    public snackBar: MatSnackBar) {
      this.FormUnidadTecnica=this.formBuilder.group({

         Nombre:['', Validators.required],
         Sigla:['', Validators.required],
         SecuenciaOT:[''],
         PrefijoControlCambios:[''],
         SecuenciaControlCambios:[''],
         Estado:1,
         DiasNotificacion:[''],
         DiasCierreOT:[''],
         SinAdministrador:[''],
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

       });


     }

     )

   }

   showToasterSuccess() {
    this.notifyService.showSuccess(
      'Data shown successfully !!',
      'codingshiksha.com'
    );
  }

  showToasterError() {
    this.notifyService.showError('Something is wrong', 'codingshiksha.com');
  }

  showToasterInfo() {
    this.notifyService.showInfo('This is info', 'codingshiksha.com');
  }

  showToasterWarning() {
    this.notifyService.showWarning('This is warning', 'codingshiksha.com');
  }

  onChangeAprobacion(e) {
    if (e.target.checked==true) {
      this.aprobacionCheck=true;
      this.FormUnidadTecnica.patchValue({SinAdministrador:"1"});
    } else {
      this.aprobacionCheck=false;
      this.FormUnidadTecnica.patchValue({SinAdministrador:"0"});
    }
  }

}
