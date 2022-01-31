import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { FormControl, FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit, Inject } from '@angular/core';
import { ModifyService } from '../../services/tipoOT/modify/modify.service';
import { UnidadTecnicaService } from '../../services/unidadTecnica/Create/unidad-tecnica.service';
interface Food {
  value: number;
  viewValue: string;
}

@Component({
  selector: 'app-modificar-tipo',
  templateUrl: './modificar-tipo.component.html',
  styleUrls: ['./modificar-tipo.component.scss']
})
export class ModificarTipoComponent implements OnInit {
  FormTipo:FormGroup;
  IdTipoOT:number;

  estados: Food[] = [
    {value: 1, viewValue: 'Activo'},
    {value: 2, viewValue: 'Inactivo'}]
    foodControl = new FormControl(this.estados[1]);
  constructor(private formBuilder: FormBuilder,
    private service: ModifyService,
    private unidad_tecnicas: UnidadTecnicaService,
    private router:Router,
    public snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<ModificarTipoComponent>,
    @Inject(MAT_DIALOG_DATA) public data:{

      
	    IdDptoTecnico		    :number,
	    IdUsrResponsable   	:number,
	    Nombre				      :string,
	    TieneSubTipo	      :number,
	    estado				      :number
      IdTipoOT			      :number,


    }) {
      this.IdTipoOT=data.IdTipoOT
      this.FormTipo=formBuilder.group({
        IdDptoTecnico : [data.IdDptoTecnico],
        IdUsrResponsable : [data.IdUsrResponsable],
        TieneSubTipo : [data.TieneSubTipo],
        estado : [data.estado],
        IdTipoOT : [data.IdTipoOT]
      })
     }

  ngOnInit(): void {
    estado: this.foodControl
  }
  cerrar(){
    this.dialogRef.close();
  }

  guardar(){
    this.FormTipo.value.IdTipoOT=this.IdTipoOT;
    this.service.modicarTipo(this.IdTipoOT, this.FormTipo.value).subscribe((data)=>{
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
