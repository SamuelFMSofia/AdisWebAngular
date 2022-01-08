import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { unidadTecnicaInterface } from '../../interfaces/unidadTecnicaInterface';

@Injectable({
  providedIn: 'root'
})
export class UnidadTecnicaService {

  baseUrl: string ='https://localhost:5001/api/';
  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  createUnidadTecnica(UnidadTecnica: unidadTecnicaInterface){
    let auth_token = localStorage.getItem('token_value');
    const headers = new HttpHeaders({
      'Content-Type' : 'application/json',
    'Authorization': 'Bearer '+auth_token
    })
    return this.http.post(this.baseUrl, UnidadTecnica, {headers:headers});
  } 
}

 

