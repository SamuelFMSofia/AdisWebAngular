import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { CreateSubtipoService } from '../../services/subTipoOT/create/create-subtipo.service';
import { UnidadTecnicaService } from '../../services/unidadTecnica/Create/unidad-tecnica.service';
import { CreateService } from '../../services/tipoOT/create/create.service';
import { NotificacionService } from '../../services/notificacion/notificacion.service';
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
  styleUrls: ['./../../style/styleCrear.scss']
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
    selectedFood = this.estados[1].value;

  constructor(
    private formBuilder: FormBuilder,
    private service:     CreateSubtipoService,
    private router:      Router,
    public snackbar: MatSnackBar,
    public unidad: UnidadTecnicaService,
    public notifyService: NotificacionService,
    public tipo: CreateService
  ) {  this.FormSubtipo=this.formBuilder.group({
    Nombre:['', Validators.required],
    IdDptoTecnico:['', Validators.required],
    IdTipoOT:['', Validators.required],
    estado:1,
  })}

  ngOnInit(): void {

    this.unidad.listarUnidadTercnica().subscribe((data:any)=>{
      this.unidadTecnicas=data.data.filter(value => value.estado == 1);

      console.log(this.unidadTecnicas)

  });


  }

  submit(){


    this.service.createSubtipo(this.FormSubtipo.value).subscribe((data:any)=>{
      console.log(data);

      //localStorage.setItem('userCode', data.result.userCode);
      this.showToasterSuccess();

        this.router.navigateByUrl('/dashboard/SubtipoOT');
          //window.location.reload()

    });
    //cerrar

  }

  cargarTipo(event:Event){
    this.unidad.listarTipoUnidadTecnica(event).subscribe((data:any)=>{
      console.log(data);
      let result=data;
      if(result.status==1){
      this.tipos=data.data.filter(value => value.estado == 1 && value.tieneSubTipo==1);;
      }else{
        this.FormSubtipo.patchValue({IdTipoOT:""});
        this.tipos=[];

        this.showToasterSuccess();

      }
    })
   }

   showToasterSuccess() {
    this.notifyService.showSuccess(
      'Correctamente.."',
      'SUBTIPO OT CREADO..!'

    );
  }

  showToasterError() {
    this.notifyService.showError('','CANCELADO..');
  }

  cancelar(){
    
  }
}
