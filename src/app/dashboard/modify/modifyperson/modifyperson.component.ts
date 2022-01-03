import { modifypersonInterface } from './../../interfaces/modifypersonInterface';
import { Observable } from 'rxjs';

import { Router } from '@angular/router';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MpersonServiceService } from './../../services/mpersonService/mperson-service.service';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { Component, Inject, OnInit } from '@angular/core';
/* import  '../../../../../node_modules/jquery/dist/jquery.min.js'; */
import {startWith, map} from 'rxjs/operators';

export interface User {
  tipoUsuario: string;
}
export interface StateGroup {
  letter: string;
  names: string[];
}
export const _filter = (opt: string[], value: string): string[] => {
  const filterValue = value.toLowerCase();

  return opt.filter(item => item.toLowerCase().includes(filterValue));
};


@Component({
  selector: 'app-modifyperson',
  templateUrl: './modifyperson.component.html',
  styleUrls: ['./modifyperson.component.scss']
})
export class ModifypersonComponent implements OnInit {
 // form: FormGroup;
 IdUsr: number;

  stateForm: FormGroup = this._formBuilder.group({
    stateGroup: '',
  });


  stateGroups: StateGroup[] = [
    {
      letter: 'A',
      names: ['Alabama', 'Alaska', 'Arizona', 'Arkansas'],
    },
    {
      letter: 'C',
      names: ['California', 'Colorado', 'Connecticut'],
    },
    {
      letter: 'D',
      names: ['Delaware'],
    },
    {
      letter: 'F',
      names: ['Florida'],
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
    },
    {
      letter: 'K',
      names: ['Kansas', 'Kentucky'],
    },
    {
      letter: 'L',
      names: ['Louisiana'],
    },
    {
      letter: 'M',
      names: [
        'Maine',
        'Maryland',
        'Massachusetts',
        'Michigan',
        'Minnesota',
        'Mississippi',
        'Missouri',
        'Montana',
      ],
    },
    {
      letter: 'N',
      names: [
        'Nebraska',
        'Nevada',
        'New Hampshire',
        'New Jersey',
        'New Mexico',
        'New York',
        'North Carolina',
        'North Dakota',
      ],
    },
    {
      letter: 'W',
      names: ['Washington', 'West Virginia', 'Wisconsin', 'Wyoming'],
    },
  ];

  stateGroupOptions: Observable<StateGroup[]>;
  myControl = new FormControl();
  options: User[] = [{tipoUsuario: 'SUPER USER'}, {tipoUsuario: 'ADMINISTRADOR'},
  {tipoUsuario: 'APROBADOR'}, {tipoUsuario: 'TECNICO'}, {tipoUsuario: 'ELABORADOR'}];
  filteredOptions: Observable<User[]>;
  form=new FormGroup({
    nombreCompleto:new FormControl,
    correo:new FormControl(),
    cargo:new FormControl(),
    unidadOrganizacional:new FormControl(),
    empresa:new FormControl(),
    gerencia:new FormControl(),
    locacion:new FormControl(),
    sucursal:new FormControl(),
    tipoUsuario:new FormControl()
  });
  userCode:string;

 constructor(
  private _formBuilder: FormBuilder,
  private formBuilder: FormBuilder,
  private service: MpersonServiceService,
  private router: Router,
  private dialogRef: MatDialogRef <ModifypersonComponent>,
  @Inject(MAT_DIALOG_DATA) private data:{
    idUser: number;
    userCode:string;
    persona: {id:number, numeroDocumento:string, nombreCompleto:string, correo:string };
    abreviatura: string;
    correo : string;
    tipoUsuario:{id:number, nombre:string, userCode:string};
    cargo: {id:string,nombre:string};
    password :string;
    unidadOrganizacional:{id: string,
    nombre: string
    sigla: string};
    empresa: {id: number,
    nombre: string};
    gerencia: {id:number,
      nombre: string};
    locacion: string;
    sucursal: string;
    perfil: {idPerfil:number, nombre:string, estado:string};
    aprobador:{nombre: string,
    userCode: string};
    diasExpiracion:string;
    estado:string;
    dptoTecnico:{id:number, nombre:string}

  }
 ){
  console.log(data);

   this.userCode=data.userCode;
   //this.nombre_Completo=data.nombre_Completo;
   this.form=formBuilder.group({
    idUser:[data.idUser],
     
     nombreCompleto:[data.persona.nombreCompleto],
     abreviatura:[data.abreviatura],
     correo:[data.correo],
     tipoUsuario:[data.tipoUsuario],
     cargo:[data.cargo.nombre],
     Password:[data.password],
     unidadOrganizacional:[data.unidadOrganizacional.sigla],
     perfil:[data.perfil.nombre],
     empresa:[data.empresa.nombre],
     gerencia:[data.gerencia.nombre],
     locacion:[data.locacion],
     sucursal:[data.sucursal],
     NombreAprobador:[data.aprobador.nombre],
     diasExpiracion:[data.diasExpiracion],
     estado:[data.estado]
   })
 }

  ngOnInit(): void {
    this.stateGroupOptions = this.stateForm.get('stateGroup')!.valueChanges.pipe(
      startWith(''),
      map(value => this._filterGroup(value)),
    );
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => (typeof value === 'string' ? value : value.name)),
      map(name => (name ? this._filter(name) : this.options.slice())),
    );

  }
  private _filterGroup(value: string): StateGroup[] {
    if (value) {
      return this.stateGroups
        .map(group => ({letter: group.letter, names: _filter(group.names, value)}))
        .filter(group => group.names.length > 0);
    }

    return this.stateGroups;
  }
  private _filter(name: string): User[] {
    const filterValue = name.toLowerCase();

    return this.options.filter(option => option.tipoUsuario.toLowerCase().includes(filterValue));
  }
  displayFn(user: User): string {
    return user && user.tipoUsuario? user.tipoUsuario : '';
  }

  cerrar(){
    this.dialogRef.close();
  }
  guardar(){
     this.form.value.userCode=this.userCode;
    this.service.modifyPerson(this.userCode, this.form.value).subscribe((data)=>{
      //direcionaa ala pagina requerida
      this.router.navigate(['listperson']);
      window.location.reload();
     });
    //cerrar
    this.dialogRef.close();
  }

}
