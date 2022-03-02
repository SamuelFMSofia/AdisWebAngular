import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { prioridadInterface } from '../../../interfaces/Prioridad/prioridadInterface';

@Injectable({
  providedIn: 'root'
})
export class UpdateService {
  baseUrl: string = 'https://localhost:5001/api/admin/prioridad/edit/';
  _baseUrl: string = 'https://localhost:5001/api/admin/prioridad/get';
  constructor(
    private http: HttpClient
  ) { 
  
  }

     
      getPrioridad(idPrioridad: number|any){
        let auth_token = localStorage.getItem('token_value');
        const headers =new HttpHeaders({
          'Content-Type' : 'application/json',
          'Authorization': 'Bearer '+auth_token
        })
       // return this.ELEMENT_DATA.slice();
          //lamado de backend le ponemos get dependiendo de como esta nuestro metodo en backend
          return this.http.get(this._baseUrl+ "?idPrioridad="+idPrioridad, {headers:headers} );

       }

  modificarPrioridad(IdPrioridad:number, prioridad:prioridadInterface){

    let auth_token = localStorage.getItem('token_value');
    const headers = new HttpHeaders({
      'Content-Type' : 'application/json',
    'Authorization': 'Bearer '+auth_token
    })
    return this.http.put(this.baseUrl+IdPrioridad, prioridad, {headers:headers});
  }
}
