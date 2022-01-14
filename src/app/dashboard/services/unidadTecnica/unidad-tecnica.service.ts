import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { unidadTecnicaInterface } from '../../interfaces/unidadTecnicaInterface';

@Injectable({
  providedIn: 'root'
})
export class UnidadTecnicaService {

  ELEMENT_DATA: unidadTecnicaInterface[] = [
    {nombre: 'APLICACIONES', sigla: 'APLICACIONES', SecuenciaOT: 1.0079, estado: 'A'},
    {nombre: 'APLICACIONES', sigla: 'APLICACIONES', SecuenciaOT: 4.0026, estado: 'A'},
    {nombre: 'APLICACIONES', sigla: 'APLICACIONES', SecuenciaOT: 6.941, estado: 'A'},

    {nombre: 'SOPORTE', sigla: 'SOPORTE', SecuenciaOT: 10.811, estado: 'A'},
    {nombre: 'SOPORTE', sigla: 'SOPORTE', SecuenciaOT: 12.0107, estado: 'A'},
    {nombre: 'SOPORTE', sigla: 'SOPORTE', SecuenciaOT: 14.0067, estado: 'P'}
  ];

  baseUrl: string ='https://localhost:5001/api/';
  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

   listarUnidadTercnica(){
    return this.ELEMENT_DATA.slice();
   }
  createUnidadTecnica(Unidad_Tecnica: unidadTecnicaInterface){

    this.ELEMENT_DATA.unshift(Unidad_Tecnica);

    /* let auth_token = localStorage.getItem('token_value');
    const headers = new HttpHeaders({
      'Content-Type' : 'application/json',
    'Authorization': 'Bearer '+auth_token
    }) */
    //return this.http.post(this.baseUrl, UnidadTecnica, {headers:headers});

  }
}



