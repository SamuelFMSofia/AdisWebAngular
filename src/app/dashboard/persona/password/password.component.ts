import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';

import { FormBuilder, Validators, FormGroup, FormControl, ValidatorFn } from '@angular/forms';

import { passwordMatchValidator } from './password.helper';
import { PasswordService } from '../../services/password/password.service';
import { throwToolbarMixedModesError } from '@angular/material/toolbar';
import { ListarusersService } from '../../services/usuarios/listusers/listarusers.service';




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
    private service: PasswordService,
    public snackBar: MatSnackBar,
    public user:ListarusersService

    ) {
     this.resetPasswordForm=this.fb.group({ idUser:[''],
      oldPassword:[''],
      newPassword:['']
    })
  }

  ngOnInit(): void {
    this.user.getUser().subscribe((data:any)=>{
      //direcionaa ala pagina requerida
      console.log(data)
    // this.unidadTecnicas=data.data;
    }
    );
    }


  onSubmit(){
    let idUser:number =0;
      idUser=parseInt(localStorage.getItem("idUser") as string);
    this.service.modificarPassword(idUser, this.resetPasswordForm.value).subscribe((data)=>{
      this.snackBar.open('Modificado Correctamente ', 'action', {
        duration: 2000,
        horizontalPosition: "start",
        verticalPosition: 'bottom',
      }).afterDismissed().subscribe(() => {

        this.router.navigate(['/unidadtecnica'])
        window.location.reload();
      });

    });
  }

// Enviar datos al servidor...
/* handleOk(): void {

    if (this.resetPasswordForm.valid) {
      this.resetPasswordForm.value.idUser=this.idUser;
      this.service.modificarPassword(this.idUser, this.resetPasswordForm.value).subscribe((data)=>{
        //direcionaa ala pagina requerida


       });
    }
  }
   */


}
