import { Observable, startWith, debounceTime, distinctUntilChanged, switchMap, map } from 'rxjs';
import { MpersonServiceService } from './../../services/mpersonService/mperson-service.service';
import { ListuoService } from './../../services/listuoService/listuo.service';

import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Component, Inject, OnInit } from '@angular/core';
import { MusersServiceService } from '../../services/musersService/musers-service.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

interface aprobador {
  userCode: string;
  nombre: string;
}

interface empresaInterface{
  id: number;
  nombre: string;
  estado: string;
}
//cargo
declare var $:any;
declare var Jquery:any;

@Component({
  selector: 'app-modifyperson',
  templateUrl: './modifyperson.component.html',
  styleUrls: ['./modifyperson.component.scss']
})
export class ModifypersonComponent implements OnInit {

//cargos
cargos:any=[];
selectedCargo:string;
//empresa
//empresita:any;
//empresas:empresaInterface[]=[];

//options2: empresaInterface[] = [];
selectedEmpresas:string;
stateCtrl: FormControl;
empresas: empresaInterface[]=[];


//gerencias
gerencias:any=[];
selectedGerencia:string;
// locaciones
locaciones=['One',
'Two',
'Three'];
///locaciones: Observable<string[]>;
selectedLocacion:string;
myControl = new FormControl('locacion');
/*  options = [
  'One',
  'Two',
  'Three'
];  */
filteredOptions: Observable<string[]>;
//sucursales
sucursales:any=[];
selectedSucursal:string;
//aprobador

selectedAprobador:string;
//unidad uo
unidadOrganizacionalesUO:any=[];
selectedUO:string;


  form: FormGroup;
  idPersona:number;

  constructor(
    private formBuilder: FormBuilder,
    private service: MpersonServiceService,
    private router: Router,
    public listaruo: ListuoService,

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
   //this.nombre_Completo=data.nombre_Completo;
   this.form=formBuilder.group({
     //digito los cambios que se van a realizar
        correo:[data.correo],
     locacion:[data.locacion],
     sucursal:[data.sucursal],
     estado:[data.estado],
     aprobador:[data.aprobador.nombre],
     empresa: [data.empresa],
     gerencia:[data.gerencia.nombre],
     unidadOrganizacional:[data.unidadOrganizacional.nombre],
     cargo:[data.cargo.nombre],
     idPersona:[data.idPersona]

   })


    }


   /// this.form.controls.get("Empresa").setValue('abc');

   cerrar(){
    this.dialogRef.close();
  }
  guardar(){
     this.form.value.idPersona=this.idPersona;
    this.service.modifyPerson(this.idPersona, this.form.value).subscribe((data)=>{
      //direcionaa ala pagina requerida
      this.router.navigate(['/listperson']);
      window.location.reload();
     });
    //cerrar
    this.dialogRef.close();
  }
/*

  onSubmit() {

    this.service.modifyUsers(this.form.value).subscribe((data:any)=>{
      console.log(data);
      this.router.navigate(['dashboard'])
    })
    console.log(this.form.value);
} */
ngOnInit(): void {
  this.listaruo.getlistUo().subscribe((data:any)=>{
    console.log(data);
    this.cargos=data.data.cargos;
    this.unidadOrganizacionalesUO=data.data.unidadOrganizacionales;
    this.gerencias=data.data.gerencias;
    this.locaciones=data.data.locaciones

    this.sucursales=data.data.sucursales;
    this.empresas=data.data.empresas;
    this.filteredOptions = this.myControl.valueChanges
    .pipe(
      startWith(''),
      map(val => this.filter(val))
    );


    /* this.empresas = this.empresa.valueChanges.pipe(
      startWith<string | empresaInterface>(''),
      map(value => (typeof value === 'string' ? value : value.nombre)),
      map(nombre => (nombre ? this._filter2(nombre) : this.options2.slice()))
    ); */

  },)

  }
  filter(val: string): string[] {
    return this.locaciones.filter(option =>
      option.toLowerCase().indexOf(val.toLowerCase()) === 0);
  }
  /* private _filter2(nombre: string): empresaInterface[] {
    const filterValue = nombre.toLowerCase();
    return this.options2.filter(o => o.nombre.toLowerCase().includes(filterValue));
  } */
  //aprobador
aprobadores:aprobador[] = [
  {userCode: 'sistemas', nombre: 'xxx'},
  {userCode: 'rrhh', nombre: 'yyyyy'},
  {userCode: 'comunicacion', nombre: 'zzzzz'},
];

select(){

}
/*  displayFn(empresas) {

  return empresas.nombre;
} */



}
