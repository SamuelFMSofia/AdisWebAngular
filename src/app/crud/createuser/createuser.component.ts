import { CrudService } from './../../services/crud.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createuser',
  templateUrl: './createuser.component.html',
  styleUrls: ['./createuser.component.scss']
})
export class CreateuserComponent  {

  constructor(
    private services: CrudService,
    //direcionamiento de pantalla
    private router:Router
  ) { }

  createuserForm = new FormGroup({
    IdUser: new FormControl('', Validators.required),
    Password :new FormControl('', Validators.required),
    Nombre_Completo : new FormControl('', Validators.required),
    SiglaUO :new FormControl('', Validators.required),
    IdUO :new FormControl('', Validators.required),
    UnidadOrg : new FormControl('', Validators.required),
    Email : new FormControl('', Validators.required),
    Empresa : new FormControl('', Validators.required),
    Gerencia : new FormControl(''),
    Locacion : new FormControl(''),
    Sucursal : new FormControl(''),
    NroDocAprobador : new FormControl('', Validators.required),
    NombreAprobador : new FormControl('', Validators.required),
  })
  // para mostrar todos los valores de nuestros formulario
  onSubmit(){
    console.log(this.createuserForm.value);
    // consumir
    this.services.createUser(this.createuserForm.value).subscribe((data:any)=>{
      alert('persona creada')
      //me direciona al ala la pantalla de  acceso
      this.router.navigate(['/']);
    })
  }


}
