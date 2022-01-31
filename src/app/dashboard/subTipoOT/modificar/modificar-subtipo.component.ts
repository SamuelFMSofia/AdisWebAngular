import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UnidadTecnicaService } from './../../services/unidadTecnica/Create/unidad-tecnica.service';
import { ModificarSubtipoService } from './../../services/subTipoOT/modificar/modificar-subtipo.service';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
interface Food {
  value: number;
  viewValue: string;
}

@Component({
  selector: 'app-modificar-subtipo',
  templateUrl: './modificar-subtipo.component.html',
  styleUrls: ['./modificar-subtipo.component.scss']
})
export class ModificarSubtipoComponent implements OnInit {
  FormSubtipo:FormGroup;
  IdSTipoOT:number;

  estados: Food[] = [
    {value: 1, viewValue: 'Activo'},
    {value: 2, viewValue: 'Inactivo'}]
    foodControl = new FormControl(this.estados[1]);
  constructor(private formBuilder: FormBuilder,
    private service: ModificarSubtipoService,
    private unidad_tecnicas: UnidadTecnicaService,
    private router:Router,
    public snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<ModificarSubtipoComponent>,
    @Inject(MAT_DIALOG_DATA) public data:{


	    IdDptoTecnico		    :number,
	    IdTipoOT   	:number,
	    Nombre				      :string,
	    estado				      :number
      IdSTipoOT			      :number,


    }) {
      this.IdSTipoOT=data.IdSTipoOT
      this.FormSubtipo=formBuilder.group({
        IdDptoTecnico : [data.IdDptoTecnico],
        IdTipoOT : [data.IdTipoOT],
        estado : [data.estado],
        IdSTipoOT : [data.IdSTipoOT]
      })
     }

  ngOnInit(): void {
    estado: this.foodControl
  }
  cerrar(){
    this.dialogRef.close();
  }

  guardar(){
    this.FormSubtipo.value.IdSTipoOT=this.IdSTipoOT;
    this.service.modificarSubtipo(this.IdSTipoOT, this.FormSubtipo.value).subscribe((data)=>{
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
