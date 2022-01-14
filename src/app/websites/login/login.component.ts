import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

import { Component } from '@angular/core';
import { ServicesService } from './../services/services.service';

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
  private router: Router,
  private _snackBar: MatSnackBar
  ) { }

  onLogin(){

    this.servi.login(this.loginData).subscribe((data:any)=>{
      console.log(data);
      let result=data;
      if(result.status==1){
          console.log(result.data.token);
        if(result.data.token!=""){

            localStorage.setItem('userCode', result.data.userResponse.userCode);
            localStorage.setItem('nombreCompleto', result.data.userResponse.persona.nombreCompleto);
            localStorage.setItem('userResponse', JSON.stringify(result.data.userResponse));
            //JSON.parse(localStorage.getItem('userResponse'));



           //localStorage.setItem('Password', data.result.password);
           localStorage.setItem('token_value', result.data.token);

     //alert(localStorage.getItem('nombre_Completo'));
     //pagina
     this.router.navigate(['/dashboard']);
  }else{
    this.error();
    }


}else{
  this.error();
  }


    }

    )

  }

  error() {
    this._snackBar.open('Usuario invalido', '', {
      duration:5000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
    });
  }


}
