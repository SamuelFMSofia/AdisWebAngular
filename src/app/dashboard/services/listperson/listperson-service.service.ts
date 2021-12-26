import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class ListpersonServiceService {
 //para llamar al enpoint
 baseUrl: string = 'https://localhost:5001/api/users';
  constructor(
    private http:HttpClient
  ) { }

  /*
  * crear el metodo de  servicio
*/
/*
este metodo trae un listado de todos los clientes
*/
getUsers(){

  // autorizacion cliente token para las vistas, captura el token
     let auth_token = localStorage.getItem('token_value');

   //crea una constante
     const headers =new HttpHeaders({
      'Content-Type' : 'application/json',
      'Authorization': 'Bearer '+auth_token
    })

    //lamado de backend le ponemos get dependiendo de como esta nuestro metodo en backend
    return this.http.get(this.baseUrl, {headers:headers} );

}
}
