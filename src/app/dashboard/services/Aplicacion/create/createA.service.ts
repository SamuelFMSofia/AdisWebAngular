import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { aplicacionInterface } from '../../../interfaces/Aplicacion/aplicacionInterface';

@Injectable({
  providedIn: 'root'
})
export class CreateAService {
  baserUrl: string ='https://localhost:5001/api/admin/aplicacion/create';

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  createAplicacion(Aplicacion: aplicacionInterface):Observable<aplicacionInterface[]>{

    let auth_token = localStorage.getItem('token_value');
   const headers = new HttpHeaders({
     'Content-Type' : 'application/json',
   'Authorization': 'Bearer '+auth_token
   })
   return this.http.post<aplicacionInterface[]>(this.baserUrl, Aplicacion, {headers:headers});

 }
}
