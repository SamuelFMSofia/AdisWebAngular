import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { subAplicacionInterface } from '../../../interfaces/SubAplicacion/subAplicacionInterface';

@Injectable({
  providedIn: 'root'
})
export class UpdateService {
  baseUrl: string = 'https://localhost:5001/api/admin/subAplicacion/edit/';
  _baseUrl: string = 'https://localhost:5001/api/admin/subAplicacion/get';
  constructor(
    private http: HttpClient
  ) { }

  getSubAplica(idSubAplica: number|any){
    let auth_token = localStorage.getItem('token_value');
    const headers =new HttpHeaders({
      'Content-Type' : 'application/json',
      'Authorization': 'Bearer '+auth_token
    })
   // return this.ELEMENT_DATA.slice();
      //lamado de backend le ponemos get dependiendo de como esta nuestro metodo en backend
      return this.http.get(this._baseUrl+ "?idSubAplica="+idSubAplica, {headers:headers} );

   }

  modificarSubAplicacion(IdSubAplica:number, subAplicacion:subAplicacionInterface){

    let auth_token = localStorage.getItem('token_value');
    const headers = new HttpHeaders({
      'Content-Type' : 'application/json',
    'Authorization': 'Bearer '+auth_token
    })
    return this.http.put(this.baseUrl+IdSubAplica, subAplicacion, {headers:headers});
  }
}
