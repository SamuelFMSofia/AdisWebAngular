import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { prioridadInterface } from '../../../interfaces/Prioridad/prioridadInterface';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  ELEMENT_DATA: prioridadInterface[]=[];

  baseUrl: string ='https://localhost:5001/api/admin/prioridad';
  constructor(
    private http: HttpClient
  ) { }

  listarPrioridad(){
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