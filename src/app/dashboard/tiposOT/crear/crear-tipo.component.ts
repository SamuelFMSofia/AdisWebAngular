import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, ValidatorFn, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { CreateService } from '../../services/tipoOT/create/create.service';
import { UnidadTecnicaService } from '../../services/unidadTecnica/Create/unidad-tecnica.service';
import { ListarusersService } from '../../services/usuarios/listusers/listarusers.service';
import { MatCheckboxDefaultOptions, MAT_CHECKBOX_DEFAULT_OPTIONS } from '@angular/material/checkbox';
import { filter } from 'rxjs';
import { ThemePalette } from '@angular/material/core';
interface Food {
  value: number;
  viewValue: string;
}

interface Foods {
  value: number;
  viewValue: string;
}

interface unidadTecnica{
  idDptoTecnico:number; nombre : string; sigla:string, estado:number
}

interface usuario{
  idUser:number; persona:{nombreCompleto: string};
}

@Component({
  selector: 'app-crear-tipo',
  templateUrl: './crear-tipo.component.html',
  styleUrls: ['./crear-tipo.component.scss'],
  providers: [
    {provide: MAT_CHECKBOX_DEFAULT_OPTIONS, useValue: { clickAction: 'noop' } as MatCheckboxDefaultOptions}
  ]
})
export class CrearTipoComponent implements OnInit {
  Estado: any[] = ['Activo', 'Pasivo'];
  FormTipo: FormGroup;
  IdDptoTecnico:number;
  estados: Food[] = [
    {value: 1, viewValue: 'Activo'},
    {value: 2, viewValue: 'Pasivo'}];
    selectedFood = this.estados[1].value;

    //
    unidadTecnicas:unidadTecnica[]=[];
    selectedUnidad:string;
///

    //
    usuarios:usuario[]=[];
    selectedUsuario:string;

  /**check */

  sending=false;
  hide=true;
  estadoCheck=false;
  color: ThemePalette = 'accent';
  disabled = false;
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
      IdUsrResponsable:0,
      TieneSubTipo:0,
      estado:1,
    })
  }

  ngOnInit(): void {

    this.unidad.listarUnidadTercnica().subscribe((data:any)=>{
      console.log(data);
      let result=data.data;
      this.unidadTecnicas=result.filter(value => value.estado == 1);
    });

}



  submit(){


    this.service.createTipoOT(this.FormTipo.value).subscribe((data:any)=>{

      console.log(data);
      //localStorage.setItem('userCode', data.result.userCode);
      this.snackbar.open('Creado Correctemante ', 'action', {
        duration: 4000,
        horizontalPosition: "start",
        verticalPosition: 'bottom',
      }).afterDismissed().subscribe(() => {
        //window.location.reload();

        this.router.navigateByUrl('/dashboard/tipoOT')

      });
    })

  }
  cargarusuario(event:Event){
   this.unidad.listarUserUnidadTecnica(event).subscribe((data:any)=>{
     console.log(data);
     let result=data;
      if(result.status==1){
        //this.FormTipo.patchValue({IdUsrResponsable:0});
      this.usuarios=data.data.filter(value => value.estado == 1);
      }else{

      this.usuarios=[{
        idUser:0, persona:{nombreCompleto: 'N/A'}
      }];
      }
   })
  }
  onChangeEstado(enable: boolean) {
    if (enable) {
      this.estadoCheck=true;
      this.FormTipo.patchValue({TieneSubTipo:"1"});
    } else {
      this.estadoCheck=false;
      this.FormTipo.patchValue({TieneSubTipo:"0"});
    }
  }

  cancelar(){
    this.snackbar.open('Cancelado ', 'action', {
      duration: 100,
      horizontalPosition: "start",
      verticalPosition: 'bottom',
    }).afterDismissed().subscribe(() => {
      //window.location.reload();
      this.router.navigate(['/dashboard/tipoOT'])

    });
  }
}
