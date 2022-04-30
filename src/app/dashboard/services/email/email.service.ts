import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { emailInterface } from '../../interfaces/usuarios/emailInterface';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  baseUrl: string = 'https://localhost:5001/api/person/changeEmail/';
  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  modificarEmail(idUser:number, email:emailInterface){

    let auth_token = localStorage.getItem('token_value');
    const headers = new HttpHeaders({
      'Content-Type' : 'application/json',
    'Authorization': 'Bearer '+auth_token
    })
    return this.http.put(this.baseUrl+idUser, email, {headers:headers});
  }

}
