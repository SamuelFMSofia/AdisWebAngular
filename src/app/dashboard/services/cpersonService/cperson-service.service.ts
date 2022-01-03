import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { createpersonInterface } from '../../interfaces/createpersonInterface';

@Injectable({
  providedIn: 'root'
})
export class CpersonServiceService  {

  //para llamar al enpoint de users register
baseUrl: string = 'https://localhost:5001/api/admin/person/create';

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  createPerson(person:createpersonInterface){
    let auth_token = localStorage.getItem('token_value');
    const headers = new HttpHeaders({
      'Content-Type' : 'application/json',
    'Authorization': 'Bearer '+auth_token
    })
    return this.http.post(this.baseUrl, person, {headers:headers});
  }

}
