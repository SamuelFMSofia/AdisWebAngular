import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { listarTipoOT } from '../../../interfaces/tipoOT/listar';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CreateService {
  ELEMENT_DATA: listarTipoOT[] = [];

  baseUrl: string ='https://localhost:5001/api/admin/tiposOT';
  baserUrl: string ='https://localhost:5001/api/admin/tipoOT/create';
  _baserUrl: string = 'https://localhost:5001/api/admin/tipoOT/get';

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


      /*mostar datos de un id tipo */
      listarTipos(idTipoOT: number|any){
        let auth_token = localStorage.getItem('token_value');
        const headers =new HttpHeaders({
          'Content-Type' : 'application/json',
          'Authorization': 'Bearer '+auth_token
        })
       // return this.ELEMENT_DATA.slice();
          //lamado de backend le ponemos get dependiendo de como esta nuestro metodo en backend
          return this.http.get(this._baserUrl+ "?idTipoOT="+idTipoOT, {headers:headers} );

       }



  // TipoOT: listarTipoOT
   createTipoOT(TipoOT: listarTipoOT):Observable<listarTipoOT[]>{

     let auth_token = localStorage.getItem('token_value');
    const headers = new HttpHeaders({
      'Content-Type' : 'application/json',
    'Authorization': 'Bearer '+auth_token
    })
    return this.http.post<listarTipoOT[]>(this.baserUrl, TipoOT, {headers:headers});

  }

}
