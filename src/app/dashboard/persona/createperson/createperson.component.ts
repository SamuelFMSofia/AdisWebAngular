import { ListuoService } from '../../services/usuarios/listuoService/listuo.service';
import { MatSnackBar ,MatSnackBarModule} from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { CpersonServiceService } from '../../services/personas/cpersonService/cperson-service.service';
import { debounceTime, map, Observable, startWith, switchMap } from 'rxjs';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { NotificacionService } from '../../services/notificacion/notificacion.service';


interface Food {
  value: number;
  viewValue: string;
}
//unidad organizacional

export interface StateGroup {
  letter: string;
  names: string[];
}
export const _filter = (opt: string[], value: string): string[] => {
  const filterValue = value.toLowerCase();

  return opt.filter(item => item.toLowerCase().includes(filterValue));
};
/************GERENCIAI********* */

interface aprobador {
  userCode: string;
  nombre: string;
}

export interface Locaciones {
  locacion: string;
}


@Component({
  selector: 'app-createperson',
  templateUrl: './createperson.component.html',
  styleUrls: ['./../../style/styleCrear.scss']
})
export class CreatepersonComponent implements OnInit {

  estados: Food[] = [
    {value: 1, viewValue: 'Activo'},
    {value: 2, viewValue: 'Pasivo'}];
    foodControl = new FormControl(this.estados[1]);


  estado=1;
 cargos:any=[];
  //cargo
  selectedCargo: string;
  //UO

  unidadOrganizacionalesUO:any=[];
  //UO
  selectedUO: string;
  //gerencia
  gerencias:any=[];
  selectedGerencia: string;

  //locaciones

  locaciones:string[];
  selectedLocacion:string;

  myControl = new FormControl();

  filteredOptions: Observable<string[]>;


  //sucursales

  sucursales:any=[];
  selectedSucursal:string;

  //empresas
  empresas:any=[];
  selectedEmpresas:string;

///* empreSA */
  form: FormGroup;
 // myControl = new FormControl();
  uo:any=[];
  //filteredOptions: Observable<string>;

//botones
toggle = true;
status = 'Enable';


    /**unidad organizacional */


    stateForm: FormGroup = this._formBuilder.group({
      unidadOrganizacional: '',
    });

    stateGroups: StateGroup[] = [
      {
        letter: 'A',
        names: ['Alabama', 'Alaska', 'Arizona', 'Arkansas'],
      },

      {
        letter: 'G',
        names: ['Georgia'],
      },
      {
        letter: 'H',
        names: ['Hawaii'],
      },
      {
        letter: 'I',
        names: ['Idaho', 'Illinois', 'Indiana', 'Iowa'],
      }
    ];

    stateGroupOptions: Observable<StateGroup[]>;
/*************************************************************/



  constructor(private formBuilder: FormBuilder,
    private _formBuilder: FormBuilder,
    private service: CpersonServiceService,
    private router:Router,
    public snackBar: MatSnackBar,
    public notifyService: NotificacionService,
    public listaruo: ListuoService
    ){
    this.form = this.formBuilder.group({
      numeroDocumento: ['', Validators.required],
      nombreCompleto: ['',Validators.required],
      correo: ['',Validators.required],
      locacion: [''],
      sucursal: ['',Validators.required],
      estado:1,
      aprobador:[''],
      empresa:[''],
      gerencia: [''],
      unidadOrganizacional: ['',Validators.required],
      cargo: [''],


          });
  }

  ngOnInit(

  ) {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => (typeof value === 'string' ? value : value.locaciones))

    );

    /*unidad organizacional*/
    this.stateGroupOptions = this.stateForm.get('unidadOrganizacional')!.valueChanges.pipe(
      startWith(''),
      map(value => this._filterGroup(value)),
    );/**lllllllllllllll */
    this.listaruo.getlistUo().subscribe((data:any)=>{
      console.log(data);

      this.cargos=data.data.cargos;
      this.unidadOrganizacionalesUO=data.data.unidadOrganizacionales;
      this.gerencias=data.data.gerencias;
      this.locaciones=data.data.locaciones;
      this.sucursales=data.data.sucursales;
      this.empresas=data.data.empresas;
      //const ELEMENT_DATA: listInterface[] =data.data;
      //this.dataSource = new MatTableDataSource(ELEMENT_DATA);
      //este datasource son datos que devuelven la tabla usuario
     // this.dataSource= new  MatTableDataSource<listInterface>(data as listInterface[]);
     // console.log(this.dataSource)

    },)
    /*********************************** *
    /**************************************** */
  }



  /*unidad organizacional */
  private _filterGroup(value: string): StateGroup[] {
    if (value) {
      return this.stateGroups
        .map(group => ({letter: group.letter, names: _filter(group.names, value)}))
        .filter(group => group.names.length > 0);
    }

    return this.stateGroups;
  }

  displayFn(locacion: Locaciones) :string{
    return locacion && locacion.locacion ? locacion.locacion : '';
  }


  submit() {
    console.log(this.form);
    this.service.createPerson(this.form.value).subscribe((data:any)=>{
      console.log(data);
      //localStorage.setItem('userCode', data.result.userCode);
      this.showToasterSuccess();
        this.router.navigate(['/dashboard/listperson'])
        
      

    })
  }

  iniForm(){
    this.form=this.formBuilder.group({

    })
  }

  //boton
  enableDisableRule() {
    this.toggle = !this.toggle;

}

cancelar(){
  /* this.snackbar.open('Cancelado ', 'action', {
    duration: 100,
    horizontalPosition: "start",
    verticalPosition: 'bottom',
  }) */
  this.showToasterError();
    //window.location.reload();
    this.router.navigate(['/dashboard/listperson'])


}
//aprobador
aprobadores:aprobador[] = [
  {userCode: 'sistemas', nombre: 'Sistemas'},
  {userCode: 'rrhh', nombre: 'Recursos Humano'},
  {userCode: 'comunicacion', nombre: 'Comunicacion'},
];


showToasterSuccess() {
  this.notifyService.showSuccess(
    'Correctamente.."',
    'PERSONA CREADO..!'

  );
}


showToasterError(){
  this.notifyService.showError(
    '_____',
    'Cancelado..!'
   
  )
}

}
