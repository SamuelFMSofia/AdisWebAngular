import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { CreateSubtipoService } from '../../services/subTipoOT/create/create-subtipo.service';
import { UnidadTecnicaService } from '../../services/unidadTecnica/Create/unidad-tecnica.service';
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
  selector: 'app-crear-subtipo',
  templateUrl: './crear-subtipo.component.html',
  styleUrls: ['./crear-subtipo.component.scss']
})
export class CrearSubtipoComponent implements OnInit {
  Estado: any[] = ['Activo', 'Pasivo'];
  FormSubtipo: FormGroup;

  unidadTecnicas:unidadTecnica[]=[];
  selectedUnidad:string;

  tipos:tipo[] = [];
  selectedTipo:string;

  estados: Food[] = [
    {value: 1, viewValue: 'Activo'},
    {value: 2, viewValue: 'Inactivo'}];
    foodControl = new FormControl(this.estados[1]);

  constructor(
    private formBuilder: FormBuilder,
    private service:     CreateSubtipoService,
    private router:      Router,
    public snackbar: MatSnackBar,
    public unidad: UnidadTecnicaService,
    public tipo: CreateService
  ) {  this.FormSubtipo=this.formBuilder.group({
    Nombre:['', Validators.required],
    IdDptoTecnico:['', Validators.required],
    IdTipoOT:[''],
    estado:[''],
  })}

  ngOnInit(): void {
    estado: this.foodControl;
    this.unidad.listarUnidadTercnica().subscribe((data:any)=>{
      this.unidadTecnicas=data.data;
  });


  }

  submit(){


    this.service.createSubtipo(this.FormSubtipo.value).subscribe((data:any)=>{
      console.log(data);
      //localStorage.setItem('userCode', data.result.userCode);
      this.snackbar.open('Creado Correctemante ', 'action', {
        duration: 1000,
        horizontalPosition: "start",
        verticalPosition: 'bottom',
      }).afterDismissed().subscribe(() => {


      });

    })
  }

  cargarusuario(event:Event){
    this.unidad.listarTipoUnidadTecnica(event).subscribe((data:any)=>{
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
