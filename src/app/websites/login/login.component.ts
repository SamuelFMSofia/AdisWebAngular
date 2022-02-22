import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { catchError, of } from 'rxjs';
import { Component } from '@angular/core';
import { ServicesService } from './../services/services.service';
import { MatDialog } from '@angular/material/dialog';
import { RestorePassword } from './restore-password/restore-password.component';
import { NotificacionService } from '../../dashboard/services/notificacion/notificacion.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent  {

  // creacion de modelo referenciado de la vista
  loginData={
    userCode:'',
    password:''
  }

  constructor(
  public servi: ServicesService,
  public dialog: MatDialog,
  private router: Router,
  private _snackBar: MatSnackBar,
  private notifyService: NotificacionService,
  ) { }


  openDialog(){

    this.dialog.open(RestorePassword, {
      width: '350px'
    });

  }

  onLogin(){

    if (this.loginData.userCode == '' || this.loginData.password == '') {
      this.OpenSnack(" Por favor, es obligatorio llenar ambos campos ");
      return;
    }

    this.servi.login(this.loginData)
    .pipe(
      catchError( err => {
          console.log(err);
          this.OpenSnack(" Hubo un error al iniciar sesión. Intente nuevamente. ");
          return of();
      })
    )
    .subscribe((data:any)=>{
      console.log(data);
      let result=data;
      if(result.status==1){
          console.log(result.data.token);
        if(result.data.token!=""){

            localStorage.setItem('userCode', result.data.userResponse.userCode);
            localStorage.setItem('nombreCompleto', result.data.userResponse.persona.nombreCompleto);
            localStorage.setItem('userResponse', JSON.stringify(result.data.userResponse));
            localStorage.setItem('idUser', result.data.userResponse.idUser);
            localStorage.setItem('idPersona', result.data.userResponse.persona.idPersona);
            //JSON.parse(localStorage.getItem('userResponse'));
            //localStorage.setItem('Password', data.result.password);
            localStorage.setItem('token_value', result.data.token);

            //alert(localStorage.getItem('nombre_Completo'));
            //pagina
            this.router.navigate(['/dashboard']);
            this.showToasterSuccess();
        }else{
            this.OpenSnack('Usuario No Valido');
        }
      }else{
        this.OpenSnack('Usuario No Valido');
      }
    })
  }


  OpenSnack(message:string){
    this._snackBar.open(message, 'skip', {
        duration: 3000,
        horizontalPosition: "center",
        verticalPosition: 'bottom'
      })
  }

  showToasterSuccess() {
    this.notifyService.showSuccess(
      'ADIS HS "Soporte en Linea"',
      'BIENVENIDO AL SISTEMA..!'
     
    );
  }

}

