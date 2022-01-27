
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { modifyUnidadTecnicaInterface } from '../../../interfaces/unidad_tecnica/modifyUnidadTecnicaInterface';

@Injectable({
  providedIn: 'root'
})
export class MunidadtecnicaService {
  baseUrl: string = 'https://localhost:5001/api/admin/unidadTecnica/edit/';
  constructor(
    private http: HttpClient
  ) { }

  modifyUnidadTecnica(IdDptoTecnico:number, unidad_tecnica:modifyUnidadTecnicaInterface){

    let auth_token = localStorage.getItem('token_value');
    const headers = new HttpHeaders({
      'Content-Type' : 'application/json',
    'Authorization': 'Bearer '+auth_token
    })
    return this.http.put(this.baseUrl+IdDptoTecnico, unidad_tecnica, {headers:headers});
  }
}
