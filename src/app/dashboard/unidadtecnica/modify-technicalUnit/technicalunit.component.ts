import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { MunidadtecnicaService } from '../../services/unidadTecnica/Modify/munidadtecnica.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Component, OnInit, Inject } from '@angular/core';
import { UnidadTecnicaService } from '../../services/unidadTecnica/Create/unidad-tecnica.service';
import { NotificacionService } from '../../services/notificacion/notificacion.service';

interface Food {
  value: number;
  viewValue: string;
}

@Component({
  selector: 'app-technicalunit',
  templateUrl: './technicalunit.component.html',
  styleUrls: ['./../../style/stylesEdit.scss']
})
export class TechnicalunitComponent implements OnInit {
  FormUnidadTecnica:FormGroup;
  IdDptoTecnico:number;

  estados: Food[] = [
    {value: 1, viewValue: 'Activo'},
    {value: 2, viewValue: 'Pasivo'}]

   /****************************** */
   administradorCheck=true;
   /****************************** */
  constructor(
    private formBuilder: FormBuilder,
    private service: MunidadtecnicaService,
    private unidad_tecnicas: UnidadTecnicaService,
    private router:Router,
    public snackBar: MatSnackBar,
    public notifyService: NotificacionService,
    public dialogRef: MatDialogRef<TechnicalunitComponent>,
    @Inject(MAT_DIALOG_DATA) public  _idUnidadTecnica:number
  ) {

    this.FormUnidadTecnica=formBuilder.group({

      nombre : [''],
      sigla: [''],
      secuenciaOT: [''],
      estado: [''],
      prefijoControlCambios:[''],
      secuenciaControlCambios:[''],
      diasNotificacion:[''],
      diasCierreOt:[''],
      sinAdministrador:[''],
      respuestaOT:[''],
      respuesta2:[''],
      respuesta3:[''],
      respuesta4:[''],
      respuesta5:[''],
      IdDptoTecnico:[''],

    }

    )

  }

  ngOnInit(): void {
    console.log(this._idUnidadTecnica);
    this.unidad_tecnicas.getUnidadtecnica(this._idUnidadTecnica).subscribe((data:any)=>{
      console.log(data);
      this.FormUnidadTecnica.patchValue({
        IdDptoTecnico:data.data.idDptoTecnico,
        nombre : data.data.nombre,
        sigla: data.data.sigla,
      secuenciaOT: data.data.secuenciaOT,
      estado: data.data.estado,
      prefijoControlCambios:data.data.prefijoControlCambios,
      secuenciaControlCambios:data.data.secuenciaControlCambios,
      diasNotificacion:data.data.diasNotificacion,
      diasCierreOt:data.data.diasCierreOt,
      sinAdministrador:data.data.sinAdministrador,
      respuestaOT:data.data.respuestaOT,
      respuesta2:data.data.respuesta2,
      respuesta3:data.data.respuesta3,
      respuesta4:data.data.respuesta4,
      respuesta5:data.data.respuesta5,

      });
      if(this.FormUnidadTecnica.value.sinAdministrador=="1"){
        this.administradorCheck=true;

      }else if (this.FormUnidadTecnica.value.sinAdministrador=="0"){
        this.administradorCheck=false;
      }
    })

  }



  cerrar(){
    this.dialogRef.close();
  }

  guardar(){
    this.FormUnidadTecnica.value._idUnidadTecnica=this._idUnidadTecnica;
    this.service.modifyUnidadTecnica(this._idUnidadTecnica, this.FormUnidadTecnica.value).subscribe((data)=>{
      //direcionaa ala pagina requerida


      this.showToasterSuccess()
        this.router.navigate(['dashboard/unidadTecnica'])
        //window.location.reload();



    });
    //cerrar
    this.dialogRef.close();
  }

  onChangeAdministrador(e) {
    if (e.target.checked==true) {
      this.administradorCheck=true;
      this.FormUnidadTecnica.patchValue({sinAdministrador:"1"});
    } else {
      this.administradorCheck=false;
      this.FormUnidadTecnica.patchValue({sinAdministrador:"0"});
    }
  }

  showToasterSuccess() {
    this.notifyService.showSuccess(
      'Correctamente.."',
      'UNIDAD TECNICA MODIFICADO..!'

    );
  }

}
