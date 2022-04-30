import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { complejidadInterface } from '../../../interfaces/Complejidad/complejidadInterface';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CreateService {
  baseUrl: string ='https://localhost:5001/api/admin/complejidad/create';
  constructor(
    private http: HttpClient,
  ) { }

  createComplejidad(Complejidad: complejidadInterface):Observable<complejidadInterface[]>{

    let auth_token = localStorage.getItem('token_value');
   const headers = new HttpHeaders({
     'Content-Type' : 'application/json',
   'Authorization': 'Bearer '+auth_token
   })
   return this.http.post<complejidadInterface[]>(this.baseUrl, Complejidad, {headers:headers});

 }
}
