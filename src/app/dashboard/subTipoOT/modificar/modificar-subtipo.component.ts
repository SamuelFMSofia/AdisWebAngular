import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UnidadTecnicaService } from './../../services/unidadTecnica/Create/unidad-tecnica.service';
import { ModificarSubtipoService } from './../../services/subTipoOT/modificar/modificar-subtipo.service';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { TipoOTComponent } from '../../tiposOT/listar/tipo-ot.component';
import { CreateService } from '../../services/tipoOT/create/create.service';
import { CreateSubtipoService } from '../../services/subTipoOT/create/create-subtipo.service';
import { NotificacionService } from '../../services/notificacion/notificacion.service';
interface Food {
  value: number;
  viewValue: string;
}
interface unidadTecnica{
  idDptoTecnico:number; nombre : string; sigla:string, estado:number
}


interface tipoInterface{
  idTipoOT:number; nombre :string;
}

@Component({
  selector: 'app-modificar-subtipo',
  templateUrl: './modificar-subtipo.component.html',
  styleUrls: ['./../../style/stylesEdit.scss'],
  providers:[CreateService, UnidadTecnicaService]
})
export class ModificarSubtipoComponent implements OnInit {
  FormSubtipo:FormGroup;
  idSTipoOT:number;
/////

   tipos:tipoInterface[]=[];

  //
  unidadTecnicas:unidadTecnica[]=[];


  estados: Food[] = [
    {value: 1, viewValue: 'Activo'},
    {value: 2, viewValue: 'Pasivo'}]

  constructor(private formBuilder: FormBuilder,
    private service: ModificarSubtipoService,
    public unidad_tecnicas: UnidadTecnicaService,
    public listarSubtipo: CreateSubtipoService,
    private router:Router,
    public notifyService: NotificacionService,
    public snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<ModificarSubtipoComponent>,
    @Inject(MAT_DIALOG_DATA) public  _idSTipoOT:number)
     {
      this.FormSubtipo=formBuilder.group({
        nombre : [''],
        IdDptoTecnico: [''],
        IdTipoOT: [''],
        estado: [''],
        idSTipoOT:['']
      })

     }

  ngOnInit(): void {
    console.log(this._idSTipoOT);
    this.unidad_tecnicas.listarUnidadTercnica().subscribe((data1:any)=>{
      console.log(data1);
      this.unidadTecnicas=data1.data.filter(value => value.estado == 1);;
    });
    this.listarSubtipo.listarSubTipos(this._idSTipoOT).subscribe((data:any)=>{
      console.log(data);
      this.cargarTipo(data.data.dptoTecnico.idDptoTecnico);
      this.FormSubtipo.patchValue(
    {
        idSTipoOT: data.data.idSTipoOT,
        nombre : data.data.nombre,
        IdDptoTecnico: data.data.dptoTecnico.idDptoTecnico,
        IdTipoOT: data.data.tipoOrdeTrabajo.idTipoOT,
        estado: data.data.estado,
        });



    console.log(this.FormSubtipo)
    })
  }
  cerrar(){
    this.showToasterError()
    this.dialogRef.close();


  }

  guardar(){

    this.FormSubtipo.value._idSTipoOT=this._idSTipoOT;
    this.service.modificarSubtipo(this._idSTipoOT, this.FormSubtipo.value).subscribe((data)=>{
      //direcionaa ala pagina requerida

      this.showToasterWarning();

         this.router.navigateByUrl('/dashboard/SubtipoOT');
       // window.location.reload();
    });
    //cerrar
   this.dialogRef.close();
  }
  cargarTipo(event:Event){
    this.unidad_tecnicas.listarTipoUnidadTecnica(event).subscribe((data:any)=>{
      console.log(data);
      let result=data;
       if(result.status==1){
       this.tipos=data.data.filter(value => value.estado == 1);
       }

    })
  }
  OpenSnack(message:string){
    this.snackBar.open(message, 'action', {
        duration: 2000,
        horizontalPosition: "start",
        verticalPosition: 'bottom',
      })
  }

  showToasterWarning() {
    this.notifyService.showWarning(
      'Correctamente.."',
      'SUBTIPO OT MODIFICADO..!'

    );
  }
  showToasterError() {
    this.notifyService.showError('','CANCELADO..');
  }

}
