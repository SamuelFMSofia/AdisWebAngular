
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FormBuilder, Validators, FormGroup, FormControl, ValidatorFn } from '@angular/forms';

import { passwordMatchValidator } from './password.helper';
import { PasswordService } from '../../services/password/password.service';

// IMPORTAMOS...



@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss']
})
export class PasswordComponent implements OnInit {

  resetPasswordForm: FormGroup;
  idUser:number;

  constructor(private fb: FormBuilder,
    private router:Router,
    private service: PasswordService
    ) {


  }

  ngOnInit(): void {
    this.createResetPasswordForm()
  }

  createResetPasswordForm(): void {
    this.resetPasswordForm = new FormGroup({
      oldPassword: new FormControl('', Validators.required),
      newPassword: new FormControl('', Validators.required)
    
    })
  }
  onSubmit(){
    console.log(this.resetPasswordForm.value)
  }

// Enviar datos al servidor...
handleOk(): void {

    if (this.resetPasswordForm.valid) {
      this.resetPasswordForm.value.idUser=this.idUser;
      this.service.modificarPassword(this.idUser, this.resetPasswordForm.value).subscribe((data)=>{
        //direcionaa ala pagina requerida

        
       });
    }
  }
  


}
