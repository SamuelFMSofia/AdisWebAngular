import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { FormControl, FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit, Inject } from '@angular/core';
import { ModifyService } from '../../services/tipoOT/modify/modify.service';
import { UnidadTecnicaService } from '../../services/unidadTecnica/Create/unidad-tecnica.service';
import { ListarusersService } from '../../services/usuarios/listusers/listarusers.service';
interface Food {
  value: number;
  viewValue: string;
}
interface unidadTecnica{
  idDptoTecnico:number; nombre : string; sigla:string
}
interface usuario{
  idUser:number; persona:{nombreCompleto: string};
}

@Component({
  selector: 'app-modificar-tipo',
  templateUrl: './modificar-tipo.component.html',
  styleUrls: ['./modificar-tipo.component.scss']
})
export class ModificarTipoComponent implements OnInit {
  FormTipo:FormGroup;
  idTipoOT:number;
  toppings:FormGroup;
  //unidad Tecnica
      unidadTecnicas:unidadTecnica[]=[];
      selectedUnidad:string;
      //
      //
      usuarios:usuario[]=[];
      selectedUsuario:string;
  estados: Food[] = [
    {value: 1, viewValue: 'Activo'},
    {value: 2, viewValue: 'Inactivo'}]
    foodControl = new FormControl(this.estados[1]);
  constructor(private formBuilder: FormBuilder,
    private service: ModifyService,
    private unidad_tecnicas: UnidadTecnicaService,
    public usuario: ListarusersService,
    private router:Router,
    public snackBar: MatSnackBar,

    public dialogRef: MatDialogRef<ModificarTipoComponent>,
    @Inject(MAT_DIALOG_DATA) public data:{


	    unidadTecnica :{idDptoTecnico:number, nombre : string, sigla: string},
	    usuario   	:{idUser: number, persona:{idPersona:number, nombreCompleto:string}},
	    nombre				      :string,
	    TieneSubTipo	      :number,
	    estado				      :number
      idTipoOT			      :number,


    }) {
      this.idTipoOT=data.idTipoOT
      this.FormTipo=formBuilder.group({
        unidadTecnica:[data.unidadTecnica],
        usuario : [data.usuario],
        nombre: [data.nombre],
        TieneSubTipo : 1,
        estado : [data.estado],
        idTipoOT : [data.idTipoOT]
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

    this.usuario.getUser().subscribe((data:any)=>{
      //direcionaa ala pagina requerida
      console.log(data)
     this.usuarios=data.data;
    }
    );
  }
  cerrar(){
    this.dialogRef.close();
  }

  guardar(){
    this.FormTipo.value.idTipoOT=this.idTipoOT;
    this.service.modicarTipo(this.idTipoOT, this.FormTipo.value).subscribe((data)=>{
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
