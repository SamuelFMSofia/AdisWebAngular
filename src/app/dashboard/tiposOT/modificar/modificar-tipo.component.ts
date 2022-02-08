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
interface usuarioInterface{
  idUser:number; persona:{nombreCompleto: string};
}

@Component({
  selector: 'app-modificar-tipo',
  templateUrl: './modificar-tipo.component.html',
  styleUrls: ['./modificar-tipo.component.scss'],
  providers:[UnidadTecnicaService]
})
export class ModificarTipoComponent implements OnInit {
  FormTipo:FormGroup;
  idTipoOT:number;
  toppings:FormGroup;
  //unidad Tecnica
      unidadTecnicas:unidadTecnica[]=[];
     
      selectedUnidadTecnica:unidadTecnica={
        idDptoTecnico: 0,
        nombre: '',
        sigla: ''
      };
      //
      //
      usuarios:usuarioInterface[]=[];
      selectedUsuario:usuarioInterface|any={
        idUser: 0,
        persona: {
          nombreCompleto: ''
        }
      };
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


	    dptoTecnico :{idDptoTecnico:number, nombre : string, sigla: string},
	    usuario   	:{idUser: number, persona:{idPersona:number, nombreCompleto:string}},
	    nombre				      :string,
	    TieneSubTipo	      :number,
	    estado				      :number
      idTipoOT			      :number,


    }) {
      this.idTipoOT=data.idTipoOT;
      this.selectedUnidadTecnica=data.dptoTecnico;
      this.selectedUsuario=data.usuario;
      this.usuarios=[];
      this.FormTipo=formBuilder.group({
        IdDptoTecnico:[data.dptoTecnico],
        IdUsrResponsable : [data.usuario],
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
    this.cargarusuario(this.selectedUnidadTecnica.idDptoTecnico);
  }
  cerrar(){
    this.dialogRef.close();
  }

  guardar(){
    this.FormTipo.value.idTipoOT=this.idTipoOT;
    //let dataSend:any;
    //let selectedItemIdDptoTecnico:any;
    //selectedItemIdDptoTecnico=this.unidadTecnicas.filter(item1=> item1.idDptoTecnico== this.FormTipo.value.IdDptoTecnico)[0];
    
    //dataSend=this.FormTipo.value;
    //dataSend.IdDptoTecnico=selectedItemIdDptoTecnico;
    this.service.modicarTipo(this.idTipoOT, this.FormTipo.value).subscribe((data)=>{
      
      //direcionaa ala pagina requerida

      this.snackBar.open('Modificado Correctamente ', 'action', {
        duration: 2000,
        horizontalPosition: "start",
        verticalPosition: 'bottom',
      }).afterDismissed().subscribe(() => {


      });


    });
    //cerrar
    //this.dialogRef.close();
  }
  cargarusuario(event:Event | any){
    this.unidad_tecnicas.listarUserUnidadTecnica(event).subscribe((data:any)=>{
      let result=data;
      if(result.status==1){
      this.usuarios=data.data;
      }else{
        this.usuarios=[];
      }
    })
   }

}
