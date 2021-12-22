import { AuthService } from './../autentication/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

    // creacion de modelo referenciado de la vista
     loginData={
       userCode:'',
       password:''
     }

      //inyectar el servicio para recibir el token

  constructor(
    private service: AuthService,
    private router: Router
  ) { }
  loginn(){
    console.error(this.loginData);
      this.service.login(this.loginData).subscribe((data:any)=>{
       //se graba en este variable en localstorage
       //console.console.log(data);

       //localStorage.setItem('UserCode', data.result.userCode);
       localStorage.setItem('UserCode', data.result.userCode);
       localStorage.setItem('token_value', data.result.token);



       //pagina
       this.router.navigate(['/layout']);

     },
      // coontrolar al usuario en la ejecucion este mensaje viene desde e api
      //(errorData)=>alert("no logeado")

     (errorData)=>alert(errorData.error.displayMessage)

     )
     this.router.navigate(['/layout']);
   }

}
