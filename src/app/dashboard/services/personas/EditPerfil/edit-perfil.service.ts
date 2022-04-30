import { modifyPersonInterface } from '../../../interfaces/personas/modifyPersonInterface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EditPerfilService {
  baseUrl: string = 'https://localhost:5001/api/person/edit/';
  _url: string = 'https://localhost:5001/api/admin/person/get';

  constructor(
    private http: HttpClient
  ) { }

  modifyPerfil(idPersona:number, person:modifyPersonInterface){

    let auth_token = localStorage.getItem('token_value');
    const headers = new HttpHeaders({
      'Content-Type' : 'application/json',
    'Authorization': 'Bearer '+auth_token
    })
    return this.http.put(this.baseUrl+idPersona, person, {headers:headers});
  }

     /*mostar datos de un id tipo */
     findperson(numeroDocumento: string|any){
      let auth_token = localStorage.getItem('token_value');
      const headers =new HttpHeaders({
        'Content-Type' : 'application/json',
        'Authorization': 'Bearer '+auth_token
      })
     // return this.ELEMENT_DATA.slice();
        //lamado de backend le ponemos get dependiendo de como esta nuestro metodo en backend
        return this.http.get(this._url+ "?numeroDocumento="+numeroDocumento, {headers:headers} );

     }

}
