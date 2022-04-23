import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, startWith, debounceTime, distinctUntilChanged, switchMap, map } from 'rxjs';
import { MpersonServiceService } from '../../services/personas/mpersonService/mperson-service.service';
import { ListuoService } from '../../services/usuarios/listuoService/listuo.service';

import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Component, Inject, OnInit } from '@angular/core';
import { MusersServiceService } from '../../services/usuarios/musersService/musers-service.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NotificacionService } from '../../services/notificacion/notificacion.service';
interface Food {
  value: number;
  viewValue: string;
}


interface aprobadorInterface {
  userCode: string;
  nombre: string
}

interface gerenciaInterface{
  id :number,
        nombre: string,
        gerencia :string

}

interface empresaInterface{
  id: number;
  nombre: string;
  estado: string
}

interface unidadOrganizacionalInterface{
  id :number;
  nombre :string;
  sigla :string
}

interface cargoInterface{
  id :number;
  nombre :string

}

//cargo
declare var $:any;
declare var Jquery:any;

@Component({
  selector: 'app-modifyperson',
  templateUrl: './modifyperson.component.html',
  styleUrls: ['./../../style/stylesEdit.scss']
})
export class ModifypersonComponent implements OnInit {
  estados: Food[] = [
    {value: 1, viewValue: 'Activo'},
    {value: 2, viewValue: 'Pasivo'}]

    foodControl = new FormControl(this.estados[1]);
//cargos
cargos:cargoInterface[]=[];
selectedCargos:cargoInterface;
//empresa
//empresita:any;
//empresas:empresaInterface[]=[];

//options2: empresaInterface[] = [];
//selectedEmpresas:string;
stateCtrl: FormControl;
selectedEmpresas:empresaInterface;
empresas: empresaInterface[]=[];


//gerencias
gerencias:gerenciaInterface[]=[];

selectedGerencias:gerenciaInterface;
// locaciones
locacion:[]=[];
locaciones=['One',
'Two',
'Three'];
///locaciones: Observable<string[]>;
selectedLocacion:string;
myControl = new FormControl('locacion');

filteredOptions: Observable<string[]>;
//sucursales
sucursales:any=[];
selectedSucursal:string;
//aprobador
aprobadores:aprobadorInterface[] = [
  {userCode: '0000000', nombre: 'N/A'},
];
selectedAprobadores :aprobadorInterface;

unidadOrganizacionales:unidadOrganizacionalInterface[]=[];
selectedUnidadOrganizacionales:unidadOrganizacionalInterface;


  form: FormGroup;
  idPersona:number;

  constructor(
    private formBuilder: FormBuilder,
    private service: MpersonServiceService,
    private router: Router,
    public listaruo: ListuoService,
    public snackBar: MatSnackBar,
    public notificacion: NotificacionService,
    public dialogRef: MatDialogRef <ModifypersonComponent>,
    //defino los datos que estos recibiendo
    @Inject(MAT_DIALOG_DATA) public data:{

      correo : string,
      locacion: string,
      sucursal: string,
      estado:string,
      aprobador:{userCode: string, nombre:string},
      empresa: {
        id : number,
        nombre :string,
        estado :string},
      gerencia: {
        id :number,
        nombre: string,
        gerencia :string},
      unidadOrganizacional:{
        id :number,
        nombre :string,

        sigla :string},
      cargo: {id :number,
        nombre :string},
      idPersona:number


    }
  )

  {

   this.idPersona =data.idPersona;
   this.selectedEmpresas=data.empresa;
   this.selectedGerencias=data.gerencia;
   this.selectedUnidadOrganizacionales=data.unidadOrganizacional;
   this.selectedCargos=data.cargo;
   this.selectedAprobadores=data.aprobador;
   //this.nombre_Completo=data.nombre_Completo;
   this.form=formBuilder.group({
     //digito los cambios que se van a realizar
        correo:[data.correo],
     locacion:[data.locacion],
     sucursal:[data.sucursal],
     estado:[data.estado],
     aprobador:[data.aprobador],
     empresa: [data.empresa],
     gerencia:[data.gerencia],
     unidadOrganizacional:[data.unidadOrganizacional],
     cargo:[data.cargo],
     idPersona:[data.idPersona]

   })


    }


   /// this.form.controls.get("Empresa").setValue('abc');

   cerrar(){
    this.dialogRef.close();
  }
  guardar(){
     this.form.value.idPersona=this.idPersona;
    //this.service.modifyPerson(this.idPersona, this.form.value).subscribe((data)=>{
      //direcionaa ala pagina requerida
      let dataSend:any;

      let selectedItemEmpresa:any;
      let selectedItemGerencia:any;
      let selectedItemUnidadOrganizacional:any;
      let selectedItemCargo:any;
      let selectedItemAprobador:any;
      selectedItemEmpresa = this.empresas.filter(item => item.id == this.form.value.empresa)[0];
      selectedItemGerencia=this.gerencias.filter(item1=> item1.id== this.form.value.gerencia)[0];
      selectedItemUnidadOrganizacional=this.unidadOrganizacionales.filter(item2=> item2.id== this.form.value.unidadOrganizacional)[0];
      selectedItemCargo=this.cargos.filter(item3=>  item3.id== this.form.value.cargo)[0];
      selectedItemAprobador=this.aprobadores.filter(item4=>item4.userCode==this.form.value.aprobador)[0];

      dataSend=this.form.value;

      console.log(selectedItemEmpresa);
      dataSend.empresa=selectedItemEmpresa;
      dataSend.gerencia=selectedItemGerencia;
      dataSend.unidadOrganizacional=selectedItemUnidadOrganizacional;
      dataSend.cargo=selectedItemCargo;
      dataSend.aprobador=selectedItemAprobador;
     this.service.modifyPerson(this.idPersona, dataSend ).subscribe((data:any)=>{
     this.showToasterWarning();
     });
    //cerrar
   // this.dialogRef.close();
  }

ngOnInit(): void {
  this.listaruo.getlistUo().subscribe((data:any)=>{
    console.log(data);
    this.cargos=data.data.cargos;
    this.unidadOrganizacionales=data.data.unidadOrganizacionales;
    this.gerencias=data.data.gerencias;
    this.locaciones=data.data.locaciones

    this.sucursales=data.data.sucursales;
    this.empresas=data.data.empresas;
    this.filteredOptions = this.myControl.valueChanges
    .pipe(
      startWith(''),
      map(val => this.filter(val))
    );

  },)

  }
  filter(val: string): string[] {
    return this.locaciones.filter(option =>
      option.toLowerCase().indexOf(val.toLowerCase()) === 0);
  }

  showToasterWarning() {
    this.notificacion.showWarning(
      'Correctamente.."',
      'MODIFICADO CORRECTAMENTE..!'

    );

  }

}
