import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { UpdateService } from '../../services/Prioridad/update/update.service';
import { UnidadTecnicaService } from '../../services/unidadTecnica/Create/unidad-tecnica.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
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

  fromPrioridad:FormGroup;
  idPrioridad:number;

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
    private service: UpdateService,
    private unidad_tecnicas: UnidadTecnicaService,
    private router:Router,
    public snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<UpdateComponent>,
    @Inject(MAT_DIALOG_DATA) public  _idPrioridad:number
  ) {
    this.fromPrioridad=formBuilder.group({
      nombre : [''],
      IdDptoTecnico: [''],
      estado: [''],

      idPrioridad:['']
    })
   }

  ngOnInit(): void {
    this.unidad_tecnicas.listarUnidadTercnica().subscribe((data1:any)=>{
      console.log(data1);
    this.unidadTecnicas=data1.data.filter(value => value.estado == 1);;
    });
    this.service.getPrioridad(this._idPrioridad).subscribe((data:any)=>{
      this.fromPrioridad.patchValue({
        idPrioridad:data.data.idPrioridad,
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

    this.fromPrioridad.value._idPrioridad=this._idPrioridad;
    this.service.modificarPrioridad(this._idPrioridad, this.fromPrioridad.value).subscribe((data)=>{
      //direcionaa ala pagina requerida

      this.snackBar.open('Modificado Correctamente ', 'action', {
        duration: 2000,
        horizontalPosition: "start",
        verticalPosition: 'bottom',
      }).afterDismissed().subscribe(() => {
        window.location.reload();
         this.router.navigateByUrl('/dashboard/Prioridad');


      });


    });
    //cerrar


  }

}
