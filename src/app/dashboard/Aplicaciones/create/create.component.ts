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
import { ListService } from '../../services/Aplicacion/list/list.service';
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
    public aplica: ListService,
    private router:      Router,
    public snackbar: MatSnackBar,
    public unidad: UnidadTecnicaService,
    public notifyService: NotificacionService,
  ) {
    this.FormAplicacion=this.formBuilder.group({
      Nombre:['', Validators.required],
      IdDptoTecnico:['', Validators.required],
      TieneSubAplica:0,
      estado:1,
    });

    this.userTable=this.fb.group({
      Nombre:['', Validators.required],
      IdDptoTecnico:['', Validators.required],
      idAplica:['', Validators.required],
      estado:1,
    })
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


  submit(){

    this.service.createAplicacion(this.FormAplicacion.value).subscribe((data1:any)=>{
      console.log(data1);
      //localStorage.setItem('userCode', data.result.userCode);
     // this.showToasterSuccess()
        
        this.aplicaciones.push(data1.data);

        this.userTable.patchValue({
          
          
          IdDptoTecnico: data1.data.dptoTecnico.idDptoTecnico,
          idAplica:data1.data.idAplica,
          
        })
        
        //this.router.navigateByUrl('/dashboard/Aplicacion')
    })

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
    this.snackbar.open('Cancelado ', 'action', {
      duration: 100,
      horizontalPosition: "start",
      verticalPosition: 'bottom',
      
    })
      //window.location.reload();
     
      this.router.navigate(['/dashboard/Aplicacion'])

  }

  showToasterSuccess() {
    this.notifyService.showSuccess(
      'Correctamente.."',
      'APLICACION CREADO..!'

    );
  }
/***************************************************** */
ngAfterOnInit() {
  this.control = this.userTable.get('tableRows') as FormArray;
}

initiateForm(): FormGroup {
  return this.fb.group({
    Nombre: ['', Validators.required],
    IdDptoTecnico: ['', Validators.required],
    idAplica: ['', Validators.required],
    estado: 1,

    isEditable: [true]
  });
}

addRow() {
  const control =  this.userTable.get('tableRows') as FormArray;
  control.push(this.initiateForm());
}

deleteRow(index: number) {
  const control =  this.userTable.get('tableRows') as FormArray;
  control.removeAt(index);
}

editRow(group: AbstractControl) {
  group.get('isEditable')?.setValue(true);
}

doneRow(group: AbstractControl) {
  this.subAplica.createSubAplicacion(this.userTable.value).subscribe((data:any)=>{
    console.log(data);
   
    group.get('isEditable')?.setValue(false);
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
  const control = this.userTable.get('tableRows') as FormArray;
  this.touchedRows = control.controls.filter(row => row.touched).map(row => row.value);
  console.log(this.touchedRows);
}

toggleTheme() {
  this.mode = !this.mode;
}

}
