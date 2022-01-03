import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListuoService {

  baseUrl: string= 'https://localhost:5001/api/general/lists';
  constructor(
    private http: HttpClient
  ) { }

  getlistUo():Observable<any[]>{
   // let  auth_token = localStorage.getItem('token_value');
    //
   // const headers = new HttpHeaders({
     // 'Content-type' : 'application/json',
    // 'Authorization' : 'Bearer ' +auth_token
  //  })
    //lamado de backend le ponemos get dependiendo de como esta nuestro metodo en backend
    return this.http.get<any>(this.baseUrl);
  }

}
