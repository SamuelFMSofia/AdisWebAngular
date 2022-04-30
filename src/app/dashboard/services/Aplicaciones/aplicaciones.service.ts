import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { aplicacionesInterface } from '../../interfaces/Aplicaciones/aplicacionesInterface';

@Injectable({
  providedIn: 'root'
})
export class AplicacionesService {

  baserUrl: string ='https://localhost:5001/api/admin/aplicacion/createNueva';

  constructor(
    private http: HttpClient,
  ) { }

  createAplicaciones(Aplicacion: aplicacionesInterface):Observable<aplicacionesInterface[]>{

    let auth_token = localStorage.getItem('token_value');
   const headers = new HttpHeaders({
     'Content-Type' : 'application/json',
   'Authorization': 'Bearer '+auth_token
   })
   return this.http.post<aplicacionesInterface[]>(this.baserUrl, Aplicacion, {headers:headers});

 }
}
