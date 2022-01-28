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

  restorePassword(correo:string, numDoc:string){
    return this.http.post(this.baseUrl+'restorePassword', {Correo:correo, NumDoc:numDoc})
  }
  // este metodo se encarga de traer los datos de localstoroge
  get getUserCode(){
    return localStorage.getItem('nombreCompleto');
  }

   /* set(userResponse:string, data:any){
    try{
      localStorage.setItem(userResponse, JSON.stringify(data.userResponse));
      console.log(data);
      } catch(e){
          console.log(e);
      }
  } */
  get getUserResponse(){
    //let restoredSession= JSON.parse('userResponse');
  //  var restoredSession = JSON.parse(localStorage.getItem('session'));
  //return localStorage.getItem('userResponse');
   return JSON.parse(localStorage.getItem('userResponse') || '{}');
    //return restoredSession;

  }
//autentificacion del localstorage
  get isAutenticado(){
   return !!localStorage.getItem('token_value');
  }

  logout(){
    localStorage.removeItem('userCode');
    localStorage.removeItem('token_value');
    //pagina
    this.router.navigate(['../websites/home']);
    //window.location.reload();
  }
}
