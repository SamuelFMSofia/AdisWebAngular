import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { actividadInterface } from '../../../interfaces/Actividad/interfaceActividad';


@Injectable({
  providedIn: 'root'
})
export class UpdateActividadService {
  baseUrl: string = 'https://localhost:5001/api/admin/actividad/edit/';
  _baseUrl: string = 'https://localhost:5001/api/admin/actividad/get';
  constructor(
    private http: HttpClient
  ) {

  }

  getActividad(idActividad: number|any){
    let auth_token = localStorage.getItem('token_value');
    const headers =new HttpHeaders({
      'Content-Type' : 'application/json',
      'Authorization': 'Bearer '+auth_token
    })
   // return this.ELEMENT_DATA.slice();
      //lamado de backend le ponemos get dependiendo de como esta nuestro metodo en backend
      return this.http.get(this._baseUrl+ "?idActividad="+idActividad, {headers:headers} );

   }


  modificarActividad(IdActividad:number, actividad:actividadInterface){

    let auth_token = localStorage.getItem('token_value');
    const headers = new HttpHeaders({
      'Content-Type' : 'application/json',
    'Authorization': 'Bearer '+auth_token
    })
    return this.http.put(this.baseUrl+IdActividad, actividad, {headers:headers});
  }
}
