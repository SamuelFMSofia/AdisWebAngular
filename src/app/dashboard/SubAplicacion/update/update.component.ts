import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UpdateService } from '../../services/SubAplicacion/update/update.service';
import { UnidadTecnicaService } from '../../services/unidadTecnica/Create/unidad-tecnica.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ListAService } from '../../services/Aplicacion/list/listA.service';
interface Food {
  value: number;
  viewValue: string;
}
interface unidadTecnica{
  idDptoTecnico:number; nombre : string
}

interface aplicacion{
  idAplica:number; nombre : string
}
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./../../style/stylesEdit.scss']
})
export class UpdateComponent implements OnInit {

  FormSubAplicacion: FormGroup;
  idSubAplica:number;

  estados: Food[] = [
    {value: 1, viewValue: 'Activo'},
    {value: 2, viewValue: 'Pasivo'}];
    selectedFood = this.estados[1].value;


      //unidad Tecnica
      unidadTecnicas:unidadTecnica[]=[];

      selectedUnidadTecnica:unidadTecnica={
        idDptoTecnico: 0,
        nombre: ''
      };

      //Aplicacion
      aplicaciones:aplicacion[]=[];

      selectedAplicaciones:aplicacion={
        idAplica: 0,
        nombre: ''
      };


  constructor(
    private formBuilder: FormBuilder,
    private service: UpdateService,
    private unidad: UnidadTecnicaService,
    private router:Router,
    public snackBar: MatSnackBar,
    public aplica: ListAService,
    public dialogRef: MatDialogRef<UpdateComponent>,
    @Inject(MAT_DIALOG_DATA) public  _idSubAplica:number
  ) {
    this.FormSubAplicacion=formBuilder.group({
      nombre : [''],
      IdDptoTecnico: [''],
      IdAplica: [''],
      estado: [''],

      idSubAplica:['']
    })
  }

  ngOnInit(): void {
    console.log(this._idSubAplica);
    this.unidad.listarUnidadTercnica().subscribe((data1:any)=>{
      console.log(data1);
      let result=data1.data;
      this.unidadTecnicas=result.filter(value => value.estado == 1);
    });

    this.aplica.listarAplicacion().subscribe((data2:any)=>{
      console.log(data2);
      let result=data2.data;
      this.aplicaciones=result.filter(value => value.estado == 1);
    });
    this.service.getSubAplica(this._idSubAplica).subscribe((data:any)=>{
      this.FormSubAplicacion.patchValue({
        idSubAplica:data.data.idSubAplica,
        nombre:data.data.nombre,
        IdDptoTecnico: data.data.dptoTecnico.idDptoTecnico,
       IdAplica: data.data.aplicaciones.idAplica,
        estado: data.data.estado,
      })
    })
  }

  cerrar(){
    this.dialogRef.close();
  }

  guardar(){

    this.FormSubAplicacion.value._idSubAplica=this._idSubAplica;
    this.service.modificarSubAplicacion(this._idSubAplica, this.FormSubAplicacion.value).subscribe((data)=>{
      //direcionaa ala pagina requerida

      this.snackBar.open('Modificado Correctamente ', 'action', {
        duration: 2000,
        horizontalPosition: "start",
        verticalPosition: 'bottom',
      }).afterDismissed().subscribe(() => {
        window.location.reload();
         this.router.navigateByUrl('/dashboard/SubAplicacion');


      });


    });
    //cerrar


  }
}
