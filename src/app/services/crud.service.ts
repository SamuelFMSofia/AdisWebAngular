import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { clientUserInterface } from '../interfaces/interfacesL/clientUserInterface';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  //para llamar al enpoint
baseUrl: string = 'https://localhost:5001/api/user/';

/*
  *  se realiza la inyeccion
*/

  constructor(private http:HttpClient) { }

  /*
  * crear el metodo de  servicio
*/
getclienUser(){
    return this.http.get(this.baseUrl);
}

createUser(person: clientUserInterface){
  return this.http.post(this.baseUrl, person);
}

}
