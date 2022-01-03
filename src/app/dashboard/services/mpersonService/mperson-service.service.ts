import { HttpHeaders, HttpClient } from '@angular/common/http';
import { modifypersonInterface } from './../../interfaces/modifypersonInterface';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MpersonServiceService {

  baseUrl: string = 'https://localhost:5001/user/edit';
  constructor(
    private http: HttpClient
  ) { }

  modifyPerson(userCode:string, users:modifypersonInterface){

    let auth_token = localStorage.getItem('token_value');
    const headers = new HttpHeaders({
      'Content-Type' : 'application/json',
    'Authorization': 'Bearer '+auth_token
    })
    return this.http.put(this.baseUrl+userCode, users, {headers:headers});
  }
}
