import { modifyuserInterface } from '../../../interfaces/usuarios/modifyuserInterface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MusersServiceService {

  //para llamar al enpoint
baseUrl: string = 'https://localhost:5001/api/admin/user/edit/';

  constructor(
    private http: HttpClient
  ) { }

  modifyUsers(idUser:number, users:modifyuserInterface){

    let auth_token = localStorage.getItem('token_value');
    const headers = new HttpHeaders({
      'Content-Type' : 'application/json',
    'Authorization': 'Bearer '+auth_token
    })
    return this.http.put(this.baseUrl+idUser, users, {headers:headers});
  }
  /* getUsuserById(userCode:string){

    let auth_token = localStorage.getItem('token_value');
    const headers = new HttpHeaders({
      'Content-Type' : 'application/json',
    'Authorization': 'Bearer '+auth_token
    })
    return this.http.get(this.baseUrl+userCode,{headers:headers});
  }
  getUsers(){

    let auth_token = localStorage.getItem('token_value');
    const headers = new HttpHeaders({
      'Content-Type' : 'application/json',
    'Authorization': 'Bearer '+auth_token
    })
    return this.http.get(this.baseUrl,{headers:headers});
} */
}
