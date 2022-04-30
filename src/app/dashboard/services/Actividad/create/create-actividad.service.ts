import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { actividadInterface } from '../../../interfaces/Actividad/interfaceActividad';


@Injectable({
  providedIn: 'root'
})
export class CreateActividadService {
  baseUrl: string ='https://localhost:5001/api/admin/actividad/create';
  constructor(
    private http: HttpClient,
  ) { }

  createActividad(Actividad: actividadInterface):Observable<actividadInterface[]>{

    let auth_token = localStorage.getItem('token_value');
   const headers = new HttpHeaders({
     'Content-Type' : 'application/json',
   'Authorization': 'Bearer '+auth_token
   })
   return this.http.post<actividadInterface[]>(this.baseUrl, Actividad, {headers:headers});

 }
}
