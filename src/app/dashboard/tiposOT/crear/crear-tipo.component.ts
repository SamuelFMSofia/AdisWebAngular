import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, ValidatorFn, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { CreateService } from '../../services/tipoOT/create/create.service';
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
  selector: 'app-crear-tipo',
  templateUrl: './crear-tipo.component.html',
  styleUrls: ['./crear-tipo.component.scss']
})
export class CrearTipoComponent implements OnInit {
  Estado: any[] = ['Activo', 'Pasivo'];
  FormTipo: FormGroup;
  IdDptoTecnico:number;
  estados: Food[] = [
    {value: 1, viewValue: 'Activo'},
    {value: 2, viewValue: 'Inactivo'}];
    foodControl = new FormControl(this.estados[1]);
    //
    unidadTecnicas:unidadTecnica[]=[];
    selectedUnidad:string;

    //
    usuarios:usuario[]=[];
    selectedUsuario:string;

    toppings: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private service:     CreateService,
    private router:      Router,
    public snackbar: MatSnackBar,
    public unidad: UnidadTecnicaService,
    public usuario: ListarusersService,

  ) {
    this.FormTipo=this.formBuilder.group({
      Nombre:['', Validators.required],
      IdDptoTecnico:['', Validators.required],
      usuario:[''],
      TieneSubTipo:1,
      estado:[''],
    })
  }

  ngOnInit(): void {
    estado: this.foodControl;
    this.cargarusuario();
  }

  submit(){


    this.service.createTipoOT(this.FormTipo.value).subscribe((data:any)=>{
      console.log(data);
      //localStorage.setItem('userCode', data.result.userCode);
      this.snackbar.open('Creado Correctemante ', 'action', {
        duration: 1000,
        horizontalPosition: "start",
        verticalPosition: 'bottom',
      }).afterDismissed().subscribe(() => {


      });


    }

    )

  }
  cargarusuario(){
   this.unidad.listarUserUnidadTecnica(1).subscribe((data:any)=>{
     this.unidadTecnicas=data;
   })
  }

}
