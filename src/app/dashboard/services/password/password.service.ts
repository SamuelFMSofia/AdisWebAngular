import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PasswordService {
  baseUrl: string = 'https://localhost:5001/api/user/changePassword';
  constructor(
    private http: HttpClient
  ) { }
}
