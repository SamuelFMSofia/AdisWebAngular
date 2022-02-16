import { Router } from '@angular/router';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { listarSubtipo } from '../../../interfaces/subtipoOT/listar';

@Injectable({
  providedIn: 'root'
})
export class CreateSubtipoService {
  ELEMENT_DATA: listarSubtipo[] = [];

  baseUrl: string ='https://localhost:5001/api/admin/SubtiposOT';
  baserUrl: string ='https://localhost:5001/api/admin/SubtipoOT/create';
  _baserUrl: string ='https://localhost:5001/api/admin/SubtipoOT/get';

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  listarSubTiposOT(){
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

    listarSubTipos(idSTipoOT: number|any){
      let auth_token = localStorage.getItem('token_value');
      const headers =new HttpHeaders({
        'Content-Type' : 'application/json',
        'Authorization': 'Bearer '+auth_token
      })
     // return this.ELEMENT_DATA.slice();
        //lamado de backend le ponemos get dependiendo de como esta nuestro metodo en backend
        return this.http.get(this._baserUrl+ "?idSTipoOT="+idSTipoOT, {headers:headers} );

     }

   createSubtipo(Subtipo: listarSubtipo){

    let auth_token = localStorage.getItem('token_value');
   const headers = new HttpHeaders({
     'Content-Type' : 'application/json',
   'Authorization': 'Bearer '+auth_token
   })
   return this.http.post(this.baserUrl, Subtipo, {headers:headers});

 }


}
