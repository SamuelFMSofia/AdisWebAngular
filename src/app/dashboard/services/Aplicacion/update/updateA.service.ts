import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { timeout, map, catchError, throwError } from 'rxjs';
import { aplicacionInterface } from '../../../interfaces/Aplicacion/aplicacionInterface';

@Injectable({
  providedIn: 'root'
})
export class UpdateAService {

  baseUrl: string = 'https://localhost:5001/api/admin/aplicacion/edit/';
  _baseUrl: string = 'https://localhost:5001/api/admin/aplicacion/get';

  constructor(
    private http: HttpClient
  ) { }

  getAplicacion(idAplica: number|any){
    let auth_token = localStorage.getItem('token_value');
    const headers =new HttpHeaders({
      'Content-Type' : 'application/json',
      'Authorization': 'Bearer '+auth_token
    })
   // return this.ELEMENT_DATA.slice();
      //lamado de backend le ponemos get dependiendo de como esta nuestro metodo en backend
      return this.http.get(this._baseUrl+ "?idAplica="+idAplica, {headers:headers} );

   }

  modificarAplicacion(IdAplica:number, aplicacion:aplicacionInterface){

    let auth_token = localStorage.getItem('token_value');
    const headers = new HttpHeaders({
      'Content-Type' : 'application/json',
    'Authorization': 'Bearer '+auth_token
    })
    return this.http.put(this.baseUrl+IdAplica, aplicacion, {headers:headers});
  }

  updateAplicacion(aplicacion:aplicacionInterface|any) {

    return this.http.put<any>(`${this.baseUrl}{aplicacion.idAplica}`,aplicacion)
    .pipe(
      timeout(4000),
      map(data => {
        return data;
      }),
      catchError( err => {
        return throwError(err);
    } ))
  }
}
