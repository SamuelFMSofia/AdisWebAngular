import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { MunidadtecnicaService } from '../../services/unidadTecnica/Modify/munidadtecnica.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Component, OnInit, Inject } from '@angular/core';
import { UnidadTecnicaService } from '../../services/unidadTecnica/Create/unidad-tecnica.service';

interface Food {
  value: number;
  viewValue: string;
}

@Component({
  selector: 'app-technicalunit',
  templateUrl: './technicalunit.component.html',
  styleUrls: ['./technicalunit.component.scss']
})
export class TechnicalunitComponent implements OnInit {
  FormUnidadTecnica:FormGroup;
  idDptoTecnico:number;

  estados: Food[] = [
    {value: 1, viewValue: 'Activo'},
    {value: 2, viewValue: 'Inactivo'}]

    foodControl = new FormControl(this.estados[1]);
  constructor(
    private formBuilder: FormBuilder,
    private service: MunidadtecnicaService,
    private unidad_tecnicas: UnidadTecnicaService,
    private router:Router,
    public snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<TechnicalunitComponent>,
    @Inject(MAT_DIALOG_DATA) public data:{

      nombre : string,
      sigla: string,
      secuenciaOT: number,
      estado: string,
      secuenciaControlCambios:number,
      prefijoControlCambios:string,
      respuestaOT:string,
      respuesta2:string,
      respuesta3:string,
      respuesta4:string,
      respuesta5:string,
      idDptoTecnico:number

    }
  ) {
    this.idDptoTecnico= data.idDptoTecnico
    this.FormUnidadTecnica=formBuilder.group({
      nombre : [data.nombre],
      sigla: [data.sigla],
      secuenciaOT: [data.secuenciaOT],
      estado: [data.estado],
      prefijoControlCambios:[data.prefijoControlCambios],
      secuenciaControlCambios:[data.secuenciaControlCambios],
      respuestaOT:[data.respuestaOT],
      respuesta2:[data.respuesta2],
      respuesta3:[data.respuesta3],
      respuesta4:[data.respuesta4],
      respuesta5:[data.respuesta5],
      idDptoTecnico:[data.idDptoTecnico]
    })
  }

  ngOnInit(): void {
    estado: this.foodControl
  }

  cerrar(){
    this.dialogRef.close();
  }

  guardar(){
    this.FormUnidadTecnica.value.IdDptoTecnico=this.idDptoTecnico;
    this.service.modifyUnidadTecnica(this.idDptoTecnico, this.FormUnidadTecnica.value).subscribe((data)=>{
      //direcionaa ala pagina requerida

      this.snackBar.open('Modificado Correctamente ', 'action', {
        duration: 2000,
        horizontalPosition: "start",
        verticalPosition: 'bottom',
      }).afterDismissed().subscribe(() => {
        
        this.router.navigate(['/unidadtecnica'])
        window.location.reload();
      });

      
    });
    //cerrar
    this.dialogRef.close();
  }

}
