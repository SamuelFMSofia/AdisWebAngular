import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { subAplicacionInterface } from '../../../interfaces/SubAplicacion/subAplicacionInterface';

@Injectable({
  providedIn: 'root'
})
export class CreateService {
  baserUrl: string ='https://localhost:5001/api/admin/subAplicacion/create';
  constructor(
    private http: HttpClient
  ) { }

  createSubAplicacion(SubAplicacion: subAplicacionInterface):Observable<subAplicacionInterface[]>{

    let auth_token = localStorage.getItem('token_value');
   const headers = new HttpHeaders({
     'Content-Type' : 'application/json',
   'Authorization': 'Bearer '+auth_token
   })
   return this.http.post<subAplicacionInterface[]>(this.baserUrl, SubAplicacion, {headers:headers});

 }
}
