import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListarusersService {
  baseUrl: string = 'https://localhost:5001/api/admin/users';
  constructor(
    private http: HttpClient
  ) { }

  getUser(){

    // autorizacion cliente token para las vistas, captura el token
       let auth_token = localStorage.getItem('token_value');
  
     //crea una constante
       const headers =new HttpHeaders({
        'Content-Type' : 'application/json',
        'Authorization': 'Bearer '+ auth_token
      })
  
      //lamado de backend le ponemos get dependiendo de como esta nuestro metodo en backend
      return this.http.get(this.baseUrl, {headers:headers} ); 
  
  }

  
//autentificacion del localstorage
  get isAutenticado(){
   return !!localStorage.getItem('token_value');
  }
}
