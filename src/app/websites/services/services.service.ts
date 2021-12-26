import { interfacelogin } from './../interface/intefacelogin';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  baseUrl: string = 'https://localhost:5001/api/user/';

  constructor(
    private http: HttpClient,
     private router:Router
  ) { }

  login(users: interfacelogin){
    return this.http.post(this.baseUrl+'login', users)
  }
  // este metodo se encarga de traer los datos de localstoroge
  get getUserCode(){
    return localStorage.getItem('nombreCompleto');
  }
//autentificacion del localstorage
  get isAutenticado(){
   return !!localStorage.getItem('token_value');
  }
}
