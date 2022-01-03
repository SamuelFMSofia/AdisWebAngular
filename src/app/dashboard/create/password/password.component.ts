
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FormBuilder, Validators, FormGroup, FormControl, ValidatorFn } from '@angular/forms';

import { passwordMatchValidator } from './password.helper';

// IMPORTAMOS...



@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss']
})
export class PasswordComponent implements OnInit {

  resetPasswordForm: FormGroup;

  constructor(private fb: FormBuilder,
    private router:Router
    ) {


  }

  ngOnInit(): void {
    this.createResetPasswordForm()
  }
  createResetPasswordForm(){
    this.resetPasswordForm = new FormGroup({
      currentPassword: new FormControl('', Validators.required),
      newPassword: new FormControl('', Validators.required),
      passwordConfirm: new FormControl('', Validators.required)
    }, passwordMatchValidator
    )
  }
  onSubmit(){
    console.log(this.resetPasswordForm.value)
  }

// Enviar datos al servidor...
handleOk(): void {

    if (this.resetPasswordForm.valid) {
        // Invocar el servicio de envio http...
    }
  }
  get currentPasswordIsValid() {
    return this.resetPasswordForm.get('currentPassword')?.valid;
  }

  get newPasswordIsValid() {
    return this.resetPasswordForm.get('newPassword')?.valid;
  }

  get passwordConfirmIsValid() {
    return this.resetPasswordForm.get('passwordConfirm')?.valid;
  }


}
