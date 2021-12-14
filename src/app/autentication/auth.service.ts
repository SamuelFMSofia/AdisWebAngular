import { registerInterface } from './../interfaces/interfacesL/registerInterface';
import { Injectable } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import { HttpClient } from '@angular/common/http';

import { Router } from '@angular/router';
import { userInterfaces } from '../interfaces/interfacesL/usersInterfaces';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

   //para llamar al enpoint de users register
baseUrl: string = 'https://localhost:5001/api/user/';

/*
  *  se realiza la inyeccion de httpclient para el llamado de la api
*/
  constructor(
      private http: HttpClient,
     private router:Router
  ) { }

  //limpiar el localstorage y desconectar usuario.
   logout(){
    localStorage.removeItem('userCode');
    localStorage.removeItem('token_value');
    //pagina
    this.router.navigate(['/']);
    window.location.reload();
  }
  register(user: registerInterface){
    return this.http.post(this.baseUrl+'Register',user)
  }
  login(users: userInterfaces ){
    return this.http.post(this.baseUrl+'login', users)
  }

  // este metodo se encarga de traer los datos de localstoroge
  get getUserCode(){
    return localStorage.getItem('userCode');
  }
//autentificacion del localstorage
  get isAutenticado(){
   return !!localStorage.getItem('token_value');
  }
}
