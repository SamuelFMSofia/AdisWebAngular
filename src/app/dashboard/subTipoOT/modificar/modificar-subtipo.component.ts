import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UnidadTecnicaService } from './../../services/unidadTecnica/Create/unidad-tecnica.service';
import { ModificarSubtipoService } from './../../services/subTipoOT/modificar/modificar-subtipo.service';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { TipoOTComponent } from '../../tiposOT/listar/tipo-ot.component';
import { CreateService } from '../../services/tipoOT/create/create.service';
interface Food {
  value: number;
  viewValue: string;
}
interface unidadTecnica{
  idDptoTecnico:number; nombre : string; sigla:string
}

interface tipo{
  idTipoOT:number; nombre :string;
}

@Component({
  selector: 'app-modificar-subtipo',
  templateUrl: './modificar-subtipo.component.html',
  styleUrls: ['./modificar-subtipo.component.scss']
})
export class ModificarSubtipoComponent implements OnInit {
  FormSubtipo:FormGroup;
  idSTipoOT:number;
/////

    tipos:tipo[]=[];
    selectedTipo:string;
  //
  unidadTecnicas:unidadTecnica[]=[];
  selectedUnidad:string;

  estados: Food[] = [
    {value: 1, viewValue: 'Activo'},
    {value: 2, viewValue: 'Inactivo'}]
    foodControl = new FormControl(this.estados[1]);
  constructor(private formBuilder: FormBuilder,
    private service: ModificarSubtipoService,
    public unidad_tecnicas: UnidadTecnicaService,
    public tipo: CreateService,
    private router:Router,
    public snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<ModificarSubtipoComponent>,
    @Inject(MAT_DIALOG_DATA) public data:{


	    unidadTecnica :{idDptoTecnico:number, nombre : string, sigla: string},
	    tipo          :{idTipoOT:number; nombre :string;},
	    nombre			:string,
	    estado			:number
      idSTipoOT		:number,


    }) {
      this.idSTipoOT=data.idSTipoOT
      this.FormSubtipo=formBuilder.group({
        IdDptoTecnico:[data.unidadTecnica],
        nombre:[data.nombre],
        IdTipoOT : [data.tipo],
        estado : [data.estado],
        idSTipoOT : [data.idSTipoOT]
      })
     }

  ngOnInit(): void {
    estado: this.foodControl;
    this.unidad_tecnicas.listarUnidadTercnica().subscribe((data:any)=>{
      //direcionaa ala pagina requerida
      console.log(data)
     this.unidadTecnicas=data.data;
    }
    );

  }
  cerrar(){
    this.dialogRef.close();
  }

  guardar(){
    this.FormSubtipo.value.idSTipoOT=this.idSTipoOT;
    this.service.modificarSubtipo(this.idSTipoOT, this.FormSubtipo.value).subscribe((data)=>{
      //direcionaa ala pagina requerida

      this.snackBar.open('Modificado Correctamente ', 'action', {
        duration: 2000,
        horizontalPosition: "start",
        verticalPosition: 'bottom',
      }).afterDismissed().subscribe(() => {


      });


    });
    //cerrar
    this.dialogRef.close();
  }
  cargarusuario(event:Event){
    this.unidad_tecnicas.listarTipoUnidadTecnica(event).subscribe((data:any)=>{
      console.log(data);
      let result=data;
      if(result.status==1){
      this.tipos=data.data;
      }else{
        this.tipos=[{idTipoOT:0, nombre :'null'}];
      }

    })
   }
}
