import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { passwordInterface } from '../../interfaces/usuarios/passwordInterface';

@Injectable({
  providedIn: 'root'
})
export class PasswordService {
  baseUrl: string = 'https://localhost:5001/api/user/changePassword/';
  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  modificarPassword(idUser:number, password:passwordInterface){

    let auth_token = localStorage.getItem('token_value');
    const headers = new HttpHeaders({
      'Content-Type' : 'application/json',
    'Authorization': 'Bearer '+auth_token
    })
    return this.http.put(this.baseUrl+idUser, password, {headers:headers});
  }
}
