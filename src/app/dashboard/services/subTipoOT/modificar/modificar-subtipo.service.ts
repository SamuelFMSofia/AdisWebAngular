import { listarSubtipo } from './../../../interfaces/subtipoOT/listar';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModificarSubtipoService {

  baseUrl: string = 'https://localhost:5001/api/admin/SubtipoOT/edit/';
  constructor(
    private http: HttpClient
  ) { }

  modificarSubtipo(IdSTipoOT:number, SubTipoOT:listarSubtipo){

    let auth_token = localStorage.getItem('token_value');
    const headers = new HttpHeaders({
      'Content-Type' : 'application/json',
    'Authorization': 'Bearer '+auth_token
    })
    return this.http.put(this.baseUrl+IdSTipoOT, SubTipoOT, {headers:headers});
  }
}
