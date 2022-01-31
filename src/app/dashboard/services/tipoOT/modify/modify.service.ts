import { listarTipoOT } from './../../../interfaces/tipoOT/listar';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModifyService {

  baseUrl: string = 'https://localhost:5001/api/admin/unidadTecnica/edit/';
  constructor(
    private http: HttpClient
  ) { }

  modicarTipo(IdTipoOT:number, tipoOT:listarTipoOT){

    let auth_token = localStorage.getItem('token_value');
    const headers = new HttpHeaders({
      'Content-Type' : 'application/json',
    'Authorization': 'Bearer '+auth_token
    })
    return this.http.put(this.baseUrl+IdTipoOT, tipoOT, {headers:headers});
  }
}
