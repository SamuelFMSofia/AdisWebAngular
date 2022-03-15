import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { aplicacionesInterface } from '../../../interfaces/Aplicaciones/aplicacionesInterface';

@Injectable({
  providedIn: 'root'
})
export class UpdateAplicacionesService {

  
  baseUrl: string = 'https://localhost:5001/api/admin/aplicacion/edit/';
  _baseUrl: string = 'https://localhost:5001/api/admin/aplicacion/get';

  constructor(
    private http: HttpClient
  ) { }

  getAplicacion(idAplica: number|any){
    let auth_token = localStorage.getItem('token_value');
    const headers =new HttpHeaders({
      'Content-Type' : 'application/json',
      'Authorization': 'Bearer '+auth_token
    })
   // return this.ELEMENT_DATA.slice();
      //lamado de backend le ponemos get dependiendo de como esta nuestro metodo en backend
      return this.http.get(this._baseUrl+ "?idAplica="+idAplica, {headers:headers} );

   }

  modificarAplicacion(IdAplica:number, aplicacion:aplicacionesInterface){

    let auth_token = localStorage.getItem('token_value');
    const headers = new HttpHeaders({
      'Content-Type' : 'application/json',
    'Authorization': 'Bearer '+auth_token
    })
    return this.http.put(this.baseUrl+IdAplica, aplicacion, {headers:headers});
  }
}
