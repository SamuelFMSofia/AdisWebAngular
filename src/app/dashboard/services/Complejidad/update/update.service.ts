import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { complejidadInterface } from '../../../interfaces/Complejidad/complejidadInterface';

@Injectable({
  providedIn: 'root'
})
export class UpdateService {
  baseUrl: string = 'https://localhost:5001/api/admin/complejidad/edit/';
  _baseUrl: string = 'https://localhost:5001/api/admin/complejidad/get';
  constructor(
    private http: HttpClient
  ) { 

  }

  getComplejidad(idComplejidad: number|any){
    let auth_token = localStorage.getItem('token_value');
    const headers =new HttpHeaders({
      'Content-Type' : 'application/json',
      'Authorization': 'Bearer '+auth_token
    })
   // return this.ELEMENT_DATA.slice();
      //lamado de backend le ponemos get dependiendo de como esta nuestro metodo en backend
      return this.http.get(this._baseUrl+ "?idComplejidad="+idComplejidad, {headers:headers} );

   }


  modificarComplejidad(IdCompejidad:number, complejidad:complejidadInterface){

    let auth_token = localStorage.getItem('token_value');
    const headers = new HttpHeaders({
      'Content-Type' : 'application/json',
    'Authorization': 'Bearer '+auth_token
    })
    return this.http.put(this.baseUrl+IdCompejidad, complejidad, {headers:headers});
  }
}
