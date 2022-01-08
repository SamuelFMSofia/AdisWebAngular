
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { modifyPersonInterface } from '../../interfaces/modifyPersonInterface';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MpersonServiceService {

  baseUrl: string = 'https://localhost:5001/api/person/edit/';
  constructor(
    private http: HttpClient
  ) { }

  modifyPerson(idPersona:number, person:modifyPersonInterface){

    let auth_token = localStorage.getItem('token_value');
    const headers = new HttpHeaders({
      'Content-Type' : 'application/json',
    'Authorization': 'Bearer '+auth_token
    })
    return this.http.put(this.baseUrl+idPersona, person, {headers:headers});
  }
}
