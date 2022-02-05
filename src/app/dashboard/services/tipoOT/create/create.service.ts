import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { listarTipoOT } from '../../../interfaces/tipoOT/listar';

@Injectable({
  providedIn: 'root'
})
export class CreateService {
  ELEMENT_DATA: listarTipoOT[] = [];

  baseUrl: string ='https://localhost:5001/api/admin/tiposOT';
  baserUrl: string ='https://localhost:5001/api/admin/tipoOT/create';


  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  listarTiposOT(){
    let auth_token = localStorage.getItem('token_value');
    const headers =new HttpHeaders({
      'Content-Type' : 'application/json',
      'Authorization': 'Bearer '+auth_token
    })
   // return this.ELEMENT_DATA.slice();
      //lamado de backend le ponemos get dependiendo de como esta nuestro metodo en backend
      return this.http.get(this.baseUrl, {headers:headers} );
   }

   createTipoOT(TipoOT: listarTipoOT){

     let auth_token = localStorage.getItem('token_value');
    const headers = new HttpHeaders({
      'Content-Type' : 'application/json',
    'Authorization': 'Bearer '+auth_token
    })
    return this.http.post(this.baserUrl, TipoOT, {headers:headers});

  }

}
