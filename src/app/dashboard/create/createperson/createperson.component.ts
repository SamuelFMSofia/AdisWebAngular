import { ListuoService } from './../../services/listuoService/listuo.service';
import { MatSnackBar ,MatSnackBarModule} from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { CpersonServiceService } from '../../services/cpersonService/cperson-service.service';
import { debounceTime, map, Observable, startWith, switchMap } from 'rxjs';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';


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
  value: string;
  nombre: string;
}
@Component({
  selector: 'app-createperson',
  templateUrl: './createperson.component.html',
  styleUrls: ['./createperson.component.scss']
})
export class CreatepersonComponent implements OnInit {
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
  locaciones:any[];
  selectedLocacion:string;

  //sucursales

  sucursales:any=[];
  selectedSucursal:string;

  //empresas
  empresas:any=[];
  selectedEmpresas:string;

///* empreSA */
  form: FormGroup;
  myControl = new FormControl();
  uo:any=[];
  filteredOptions: Observable<string>;

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
    public listaruo: ListuoService
    ){
    this.form = this.formBuilder.group({
      numeroDocumento: ['', Validators.required],
      nombreCompleto: ['',Validators.required],
      correo: ['',Validators.required],
      locacion: [''],
      sucursal: ['',Validators.required],
      estado:[''],
      aprobador:[''],
      empresa:[''],
      gerencia: [''],
      unidadOrganizacional: ['',Validators.required],
      cargo: [''],


          });
  }

  ngOnInit(

  ) {
    //empresa
    //this.filteredOptions = this.myControl.valueChanges.pipe(
     // startWith(''),
     //debounceTime(300),
      //switchMap(value=>this._filter(value))
      /* map(value => (typeof value === 'string' ? value : value.name)),
      map(name => (name ? this._filter(name) : this.uo.slice())), */
   // );
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

  submit() {

    this.service.createPerson(this.form.value).subscribe((data:any)=>{
      console.log(data);
      //localStorage.setItem('userCode', data.result.userCode);
      this.snackBar.open('Creado Correctemante ', 'action', {
        duration: 4000,
        horizontalPosition: "start",
        verticalPosition: 'bottom',
      }).afterDismissed().subscribe(() => {
        window.location.reload();
        this.router.navigate(['/listperson'])
        console.log('xxxxxxxxxx');
      });




      ;
    /*   this._snackBar.open('Cannonball!!', 'Splash', {
        horizontalPosition: "start",
        verticalPosition: 'bottom',
      }); */

      //alerta lo que me esta devolviendo el backend
      //alert("fdfdfdfd");
      //ruta

    }

    )
  }
  //empresa
  /* displayFn(user: User): string {
    return user && user.name ? user.name : '';
  }
  private _filter(name: string): User[] {
    const filterValue = name.toLowerCase();

    return this.uo.filter(uo => uo.name.toLowerCase().includes(filterValue));
  } */
  //boton
  enableDisableRule() {
    this.toggle = !this.toggle;

}
/////cargo

/* cargos: Cargo[] = [


]; */
//aprobador
aprobadores:aprobador[] = [
  {value: 'sistemas', nombre: 'xxx'},
  {value: 'rrhh', nombre: 'yyyyy'},
  {value: 'comunicacion', nombre: 'zzzzz'},
];

}
