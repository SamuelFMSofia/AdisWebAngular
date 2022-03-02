import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { UpdateService } from '../../services/Aplicacion/update/update.service';
import { UnidadTecnicaService } from '../../services/unidadTecnica/Create/unidad-tecnica.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ThemePalette } from '@angular/material/core';
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

  fromAplicacion:FormGroup;
  idAplica:number;

  unidadTecnicas:unidadTecnica[]=[];

  selectedUnidadTecnica:unidadTecnica={
    idDptoTecnico: 0,
    nombre: ''
  };

  estados: Food[] = [
    {value: 1, viewValue: 'Activo'},
    {value: 2, viewValue: 'Pasivo'}]

    estadoCheck=false;
    color: ThemePalette = 'accent';
    disabled = false;


  constructor(
    private formBuilder: FormBuilder,
    private service: UpdateService,
    private unidad_tecnicas: UnidadTecnicaService,
    private router:Router,
    public snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<UpdateComponent>,
    @Inject(MAT_DIALOG_DATA) public  _idAplica:number
  ) {
    this.fromAplicacion=formBuilder.group({
      nombre : [''],
      IdDptoTecnico: [''],
      tieneSubAplica:[''],
      estado: [''],

      idAplica:['']
    })
  }

  ngOnInit(): void {
    this.unidad_tecnicas.listarUnidadTercnica().subscribe((data1:any)=>{
      console.log(data1);
    this.unidadTecnicas=data1.data.filter(value => value.estado == 1);;
    });
    this.service.getAplicacion(this._idAplica).subscribe((data:any)=>{
      this.fromAplicacion.patchValue({
        idAplica:data.data.idAplica,
        nombre:data.data.nombre,
        IdDptoTecnico: data.data.dptoTecnico.idDptoTecnico,
        tieneSubAplica:data.data.tieneSubAplica,
        estado: data.data.estado,
      })
      if(this.fromAplicacion.value.tieneSubAplica=="1"){
        this.estadoCheck=true;

      }else if (this.fromAplicacion.value.tieneSubAplica=="0"){
        this.estadoCheck=false;
      }
    })
  }

  cerrar(){
    this.dialogRef.close();
  }

  guardar(){

    this.fromAplicacion.value._idAplica=this._idAplica;
    this.service.modificarAplicacion(this._idAplica, this.fromAplicacion.value).subscribe((data)=>{
      //direcionaa ala pagina requerida

      this.snackBar.open('Modificado Correctamente ', 'action', {
        duration: 2000,
        horizontalPosition: "start",
        verticalPosition: 'bottom',
      }).afterDismissed().subscribe(() => {
        window.location.reload();
         this.router.navigateByUrl('/dashboard/Aplicacion');


      });


    });
    //cerrar


  }

  onChangeEstado(enable: boolean) {
    if (enable) {
      this.estadoCheck=true;
      this.fromAplicacion.patchValue({tieneSubAplica:"1"});
    } else {
      this.estadoCheck=false;
      this.fromAplicacion.patchValue({tieneSubAplica:"0"});
    }
  }


}
