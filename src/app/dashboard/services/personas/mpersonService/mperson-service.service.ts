
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { modifyPersonInterface } from '../../../interfaces/personas/modifyPersonInterface';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MpersonServiceService {

  // este servicio es para AdminEditPerson o para el EditPerson normal?
  // si es así, donde queda el AdminEditPerson?
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
