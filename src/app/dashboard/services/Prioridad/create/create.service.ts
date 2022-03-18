import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { prioridadInterface } from '../../../interfaces/Prioridad/prioridadInterface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CreateService {
  baserUrl: string ='https://localhost:5001/api/admin/prioridad/create';
  constructor(
    private http: HttpClient,
  ) { }

  createPrioridad(Prioridad: prioridadInterface):Observable<prioridadInterface[]>{

    let auth_token = localStorage.getItem('token_value');
   const headers = new HttpHeaders({
     'Content-Type' : 'application/json',
   'Authorization': 'Bearer '+auth_token
   })
   return this.http.post<prioridadInterface[]>(this.baserUrl, Prioridad, {headers:headers});

 }
}
