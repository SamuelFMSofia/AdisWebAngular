import { modifyuserInterface } from './../../interfaces/modifyuserInterface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MusersServiceService {

  //para llamar al enpoint
baseUrl: string = 'https://localhost:5001/api/user/';

  constructor(
    private http: HttpClient
  ) { }

  modifyUsers(users:modifyuserInterface){
    
    let auth_token = localStorage.getItem('token_value');
    const headers = new HttpHeaders({
      'Content-Type' : 'application/json',
    'Authorization': 'Bearer '+auth_token
    })
    return this.http.put(this.baseUrl, users,{headers:headers});    
  }
  getUsuserById(userId:number){
    
    let auth_token = localStorage.getItem('token_value');
    const headers = new HttpHeaders({
      'Content-Type' : 'application/json',
    'Authorization': 'Bearer '+auth_token
    })
    return this.http.get(this.baseUrl+userId,{headers:headers});    
  }
  getUsers(){

    let auth_token = localStorage.getItem('token_value');
    const headers = new HttpHeaders({
      'Content-Type' : 'application/json',
    'Authorization': 'Bearer '+auth_token
    })
    return this.http.get(this.baseUrl,{headers:headers});   
}
}
