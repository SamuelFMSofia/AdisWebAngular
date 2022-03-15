import { NotificacionService } from './../../services/notificacion/notificacion.service';
import { Component, Input, OnInit, ViewChild, Inject, Injector } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators, AbstractControl } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { aplicacionesInterface } from '../../interfaces/Aplicaciones/aplicacionesInterface';
import { UpdateAService } from '../../services/Aplicacion/update/updateA.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { UnidadTecnicaService } from '../../services/unidadTecnica/Create/unidad-tecnica.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ListAService } from '../../services/Aplicacion/list/listA.service';
import { MAT_TAB_CONTENT } from '@angular/material/tabs/tab-content';
import { subAplicacionInterface } from '../../interfaces/SubAplicacion/subAplicacionInterface';
import { UpdateService } from '../../services/SubAplicacion/update/update.service';
import { CreateService } from '../../services/SubAplicacion/create/create.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

interface unidadTecnica{
  idDptoTecnico:number; nombre : string
}

interface Food {
  value: number;
  viewValue: string;
}

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./../../style/styleCrear.scss'],
  providers:[UpdateAService]
})
export class UpdateComponent implements OnInit {



  formAplicacion:FormGroup|any;

  /****************ESTADO********** */
  estados: Food[] = [
    {value: 1, viewValue: 'Activo'},
    {value: 2, viewValue: 'Pasivo'}];
    selectedFood = this.estados[1].value;
  /*****UNIDAD TECNICA************ */

  unidadTecnicas:unidadTecnica[]=[];

  selectedUnidadTecnica:unidadTecnica={
    idDptoTecnico: 0,
    nombre: ''
  };

  /****************CHECK************************* */

  sending=false;
  hide=true;
  estadoCheck=false;
  color: ThemePalette = 'accent';
  disabled = false;

  /***************************** */
  @ViewChild(MatPaginator) paginator: MatPaginator | any;


  aplicacionUpdate:aplicacionesInterface={
    idAplica: 0,
    nombre: '',
    idDptoTecnico: 0,
    TieneSubAplica: 0,
    estado: 0,

  }

        idSubAplica:number;
        enableEditIndex = null;
        isEditing: boolean = false;
        employeesList: subAplicacionInterface[]  =[
        ];
  constructor(
    private fmb: FormBuilder,
    private fb: FormBuilder,
    private service: UpdateAService,
    private unidad_tecnicas: UnidadTecnicaService,
    private subAplica: UpdateService,
    private router: Router,
    private route:ActivatedRoute,
    private createSubAplica:CreateService,
    private notificacion: NotificacionService

    ) {
      this.formAplicacion=fb.group({
        Nombre : [''],
        IdDptoTecnico: [''],
        tieneSubAplica:[''],
        estado: [''],
        idAplica:[''],
      //employees:['']
      });
    
    }
   id:number;
  ngOnInit(): void {
    
    this.route.params.subscribe(
      (params: Params) => {

       this.id=  params['idAplica'];
       console.log(this.id)
       this.view(this.id);

      }
    );

    //console.log(this.userTable);
    this.unidad_tecnicas.listarUnidadTercnica().subscribe((data1:any)=>{
      // console.log(data1);
     this.unidadTecnicas=data1.data.filter(value => value.estado == 1);;
     });

     this.service.getAplicacion(this.id).subscribe((data:any)=>{

      this.employeesList= data.data.subAplica;// aqui carga


       this.formAplicacion.patchValue({
         idAplica:data.data.idAplica,
         Nombre:data.data.nombre,
         IdDptoTecnico: data.data.dptoTecnico.idDptoTecnico,
         tieneSubAplica:data.data.tieneSubAplica,
         estado: data.data.estado,
     //   employees:data.data.subAplica

       })


       if(this.formAplicacion.value.tieneSubAplica=="1"){
         this.estadoCheck=true;

       }else if (this.formAplicacion.value.tieneSubAplica=="0"){
         this.estadoCheck=false;
       }
     });


  }


 
  onChangeEstado(enable: boolean) {
    if (enable) {
      this.estadoCheck=true;
      this.formAplicacion.patchValue({tieneSubAplica:"1"});
    } else {
      this.estadoCheck=false;
      this.formAplicacion.patchValue({tieneSubAplica:"0"});
    }
  }

  view(idAplica:any):void{
    this.sending=true;


  }

    /****************************************** */
    switchEditMode(i) {
      this.isEditing = true;
      this.enableEditIndex = i;
      
    }

      save(subAplica: subAplicacionInterface) {
      console.log(subAplica)
      if(subAplica.idSubAplica>0){
          this.subAplica.modificarSubAplicacion(subAplica.idSubAplica, subAplica).subscribe((data:any)=>{
          
      
            this.isEditing = false;
            this.enableEditIndex = null;
            this.subToasterWarning();
          })
         
        }else{
          this.createSubAplica.createSubAplicacion( subAplica).subscribe((data:any)=>{
          
      
            this.isEditing = false;
            this.enableEditIndex = null;
            this.showToasterSuccess();
          })
      
        }
      }
    addRow() {

          this.employeesList.push({
            idSubAplica:0,
            idAplica: this.formAplicacion.value.idAplica,
            nombre: '',
            idDptoTecnico: this.formAplicacion.value.IdDptoTecnico,
            estado: 1,
            
          });
         
        }
 submitForm() {
  this.service.modificarAplicacion(this.id, this.formAplicacion.value).subscribe((data:any)=>{
    console.log(data);
    //localStorage.setItem('userCode', data.result.userCode);
   // this.showToasterSuccess()
   this.showToasterWarning();
  })

}
cancelar(){

    //window.location.reload();
    this.router.navigate(['/dashboard/Aplicacion'])

  
}

showToasterSuccess() {
  this.notificacion.showSuccess(
    'Correctamente.."',
    'APLICACION CREADO..!'

  );
}

showToasterWarning() {
  this.notificacion.showWarning(
    'Correctamente.."',
    'APLICACION MODIFICADO..!'

  );
}

subToasterWarning() {
  this.notificacion.showWarning(
    'Correctamente.."',
    'SUB-APLICACION MODIFICADO..!'

  );
}

}
