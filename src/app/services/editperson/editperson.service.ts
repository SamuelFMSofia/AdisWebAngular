import { editpersonInterface } from './../../interfaces/interfacesL/editpersonInterface';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EditpersonService {

  baseUrl: string = 'https://localhost:5001/api/admin/editperson';

  constructor(
    private http:HttpClient,
    private router:Router
  ) { }

  editPerson(editpersona: editpersonInterface){
      return this.http.put(this.baseUrl, editpersona)
  }

}
