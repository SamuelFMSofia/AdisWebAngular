import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, FormArrayName, AbstractControl } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { AplicacionesService } from '../../services/Aplicaciones/aplicaciones.service';
//import { ListService } from '../../services/SubAplicacion/list/list.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UnidadTecnicaService } from '../../services/unidadTecnica/Create/unidad-tecnica.service';
import { NotificacionService } from '../../services/notificacion/notificacion.service';
import { MatTable, MatTableDataSource } from '@angular/material/table';

import { CreateService } from '../../services/SubAplicacion/create/create.service';
import { ListAService } from '../../services/Aplicacion/list/listA.service';
import { CreateAService } from '../../services/Aplicacion/create/createA.service';

interface unidadTecnica{
  idDptoTecnico:number; nombre : string
}

interface Food {
  value: number;
  viewValue: string;
}

interface aplicacion{
  idAplica:number; nombre : string
}

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./../../style/styleCrear.scss'],
})
export class CreateComponent implements OnInit {

  _idAplica:number;
  _idDptoTecnico:number;

  estados: Food[] = [
    {value: 1, viewValue: 'Activo'},
    {value: 2, viewValue: 'Pasivo'}];
    selectedFood = this.estados[1].value;

    FormAplicacion: FormGroup;

    //unidad Tecnica
    unidadTecnicas:unidadTecnica[]=[];

    selectedUnidadTecnica:unidadTecnica={
      idDptoTecnico: 0,
      nombre: ''
    };

    /**check */

  sending=false;
  hide=true;
  estadoCheck=false;
  color: ThemePalette = 'accent';
  disabled = false;

  /******************************************** */



  aplicaciones:aplicacion[]=[];

  selectedAplicaciones:aplicacion={
    idAplica: 0,
    nombre: ''
  };

  /********************************** */
  userTable: FormGroup;
  control: FormArray;
  mode: boolean;
  touchedRows: any;

  /********************* */

  constructor(
    private formBuilder: FormBuilder,
    private fb: FormBuilder,
    private service: CreateAService,
    private subAplica: CreateService,
    //public subAplica: ListService,
    public aplica: ListAService,
    private router:      Router,
    public snackbar: MatSnackBar,
    public unidad: UnidadTecnicaService,
    public notifyService: NotificacionService,
  ) {
    this.FormAplicacion=this.formBuilder.group({
      idAplica: [''],
      Nombre:['', Validators.required],
      IdDptoTecnico:['', Validators.required],
      TieneSubAplica:0,
      estado:1,
    });

  /*   this.userTable=this.fb.group({
      Nombre:['', Validators.required],
      IdDptoTecnico:['', Validators.required],
      idAplica:['', Validators.required],
      estado:1,
    }) */
   }

  ngOnInit(): void {
    this.unidad.listarUnidadTercnica().subscribe((data:any)=>{
      console.log(data);
      let result=data.data;
      this.unidadTecnicas=result.filter(value => value.estado == 1);
    });
    this.aplica.listarAplicacion().subscribe((data:any)=>{
      console.log(data);
      let result=data.data;
      this.aplicaciones=result.filter(value => value.estado == 1);
    });
    this.touchedRows = [];
    this.userTable = this.fb.group({
      tableRows: this.fb.array([])
    });
    this.addRow();
  }

    submitSubAplica(){

      this.subAplica.createSubAplicacion(this.userTable.value).subscribe((data:any)=>{
        console.log(data);


        /*   this.router.navigateByUrl('/dashboard/SubAplicacion') */
      })

     }

  onChangeEstado(enable: boolean) {
    if (enable) {
      this.estadoCheck=true;
      this.FormAplicacion.patchValue({TieneSubAplica:"1"});
    } else {
      this.estadoCheck=false;
      this.FormAplicacion.patchValue({TieneSubAplica:"0"});
    }
  }

  cancelar(){
    this.showToasterError();
      //window.location.reload();

      this.router.navigate(['/dashboard/Aplicacion'])

  }


/***************************************************** */
ngAfterOnInit() {
  this.control = this.userTable.get('tableRows') as FormArray;
}

addRow() {


 if(this.FormAplicacion.status=="VALID"){
   const control =  this.userTable.get('tableRows') as FormArray;

   control.push(
    this.fb.group({
     Nombre: ['', Validators.required],
     IdDptoTecnico:this._idDptoTecnico,
     idAplica:this._idAplica,
     estado: 1,

     isEditable: [true]
   }));

  }


}

deleteRow(index: number) {
  const control =  this.userTable.get('tableRows') as FormArray;
  control.removeAt(index);
}

editRow(group: AbstractControl) {
  group.get('isEditable')?.setValue(true);
}

doneRow(index: number) {
  const control =  this.userTable.get('tableRows')  as FormArray;

  let sub= control.at(index);


  this.subAplica.createSubAplicacion(sub.value).subscribe((data1:any)=>{
    console.log(data1);
    //group.get('isEditable')?.setValue(false);
    this.showToasterSuccessSub();
    /*   this.router.navigateByUrl('/dashboard/SubAplicacion') */
  })


}

saveUserDetails() {
  console.log(this.userTable.value);
}

get getFormControls() {
  const control = this.userTable.get('tableRows') as FormArray;
  return control;
}

submitForm() {
  this.service.createAplicacion(this.FormAplicacion.value).subscribe((data1:any)=>{
    console.log(data1);
    //localStorage.setItem('userCode', data.result.userCode);
   // this.showToasterSuccess()
   this._idAplica=data1.data.idAplica;
   this._idDptoTecnico=data1.data.dptoTecnico.idDptoTecnico;
   console.log(this._idAplica);

   this.showToasterSuccess()

  })

}

toggleTheme() {
  this.mode = !this.mode;
}

    showToasterSuccess() {
      this.notifyService.showSuccess(
        'Correctamente.."',
        'APLICACION CREADO..!'

      );

    }

    showToasterSuccessSub() {
      this.notifyService.showSuccess(
        'Correctamente.."',
        'SUB APLICACION CREADO..!'

      );

    }
    showToasterError(){
      this.notifyService.showError(
        '_____',
        'Cancelado..!'
       
      )
    }


}
