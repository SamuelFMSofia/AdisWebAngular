import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Location } from '@angular/common';
import { AuthService } from '../autentication/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
    //definimos los campos que va llevar nuestro formulario
    registerForm: FormGroup

  constructor( private fb: FormBuilder,
    private service: AuthService,
    private router: Router
    ) {
      this.registerForm=this.fb.group({
        userCode: ['', Validators.required],
        Nombre_Completo:['', Validators.required],
        Email: ['', Validators.required],
        password: ['', Validators.compose([
          Validators.required,
          Validators.minLength(6),
          Validators.minLength(30)])],
        Cargo: ['', Validators.required],
        UnidadOrg:['', Validators.required],
        Gerencia: ['', Validators.required],
        Locacion: ['', Validators.required],
        Sucursal: ['', Validators.required]
      })
    }
  onSubmit(){
     //register llama al metodo del interfaceR
     this.service.register(this.registerForm.value).subscribe((data:any)=>{
      //lo que devuelve lo guardo en la variable localstore
      localStorage.setItem('userCode', data.result.userCode);
      localStorage.setItem('token_value', data.result.token);
//alerta lo que me esta devolviendo el backend
      alert(data.displayMessage);
      //ruta
      this.router.navigate(['/user']);
    })
  }
  ngOnInit(): void {

  }

}
