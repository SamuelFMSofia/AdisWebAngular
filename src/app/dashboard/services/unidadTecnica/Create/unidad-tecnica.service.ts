import { unidadTecnicaInterface } from './../../../interfaces/unidadTecnicaInterface';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class UnidadTecnicaService {

  ELEMENT_DATA: unidadTecnicaInterface[] = [

  ];

  baseUrl: string ='https://localhost:5001/api/admin/unidadTecnicas';
  baserUrl: string ='https://localhost:5001/api/admin/unidadTecnica/create';
  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

   listarUnidadTercnica(){
    let auth_token = localStorage.getItem('token_value');
    const headers =new HttpHeaders({
      'Content-Type' : 'application/json',
      'Authorization': 'Bearer '+auth_token
    })
   // return this.ELEMENT_DATA.slice();
      //lamado de backend le ponemos get dependiendo de como esta nuestro metodo en backend
      return this.http.get(this.baseUrl, {headers:headers} );
   }





  createUnidadTecnica(UnidadTecnica: unidadTecnicaInterface){

    //this.ELEMENT_DATA.unshift(IdDptoTecnico);

     let auth_token = localStorage.getItem('token_value');
    const headers = new HttpHeaders({
      'Content-Type' : 'application/json',
    'Authorization': 'Bearer '+auth_token
    }) 
    return this.http.post(this.baserUrl, UnidadTecnica, {headers:headers});

  }
}



