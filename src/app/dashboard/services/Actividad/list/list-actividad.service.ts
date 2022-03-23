import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { actividadInterface } from '../../../interfaces/Actividad/interfaceActividad';


@Injectable({
  providedIn: 'root'
})
export class ListActividadService {

  ELEMENT_DATA: actividadInterface[]=[];

  baseUrl: string ='https://localhost:5001/api/admin/actividad';
  constructor(
    private http: HttpClient
  ) { }

  listarActividad(){
    let auth_token = localStorage.getItem('token_value');
    const headers =new HttpHeaders({
      'Content-Type' : 'application/json',
      'Authorization': 'Bearer '+auth_token
    })
   // return this.ELEMENT_DATA.slice();
      //lamado de backend le ponemos get dependiendo de como esta nuestro metodo en backend
      return this.http.get(this.baseUrl, {headers:headers} );
   }
  }