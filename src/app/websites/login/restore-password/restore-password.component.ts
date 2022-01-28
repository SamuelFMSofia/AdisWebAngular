import {Component} from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { catchError, of } from 'rxjs';
import { ServicesService } from './../../services/services.service';

@Component({
    selector: 'login-restore-password',
    templateUrl: './restore-password.component.html',
    styleUrls: ['./restore-password.component.scss']
  })
  export class RestorePassword {

    correo='';
    numDoc='';

    constructor(
        public dialogRef: MatDialogRef<RestorePassword>,
        public service: ServicesService,
        public dialog: MatDialog,
        private snackBar: MatSnackBar
    ) {}
  
    cancel(): void {
        this.dialogRef.close();
    }

    sendEmail(): void{
        this.service.restorePassword(this.correo, this.numDoc)
        .pipe(
            catchError( err => {
                console.log(err);
                this.OpenSnack(" Hubo un error al enviar el mensaje de correo ");
                return of();
            })
        )
        .subscribe((data:any) => {
            console.log(data);
            let result=data;
            if(result.status==1){
                this.OpenSnack(" Mensaje de Correo Enviado ");
            } else {
                this.OpenSnack("El numero de documento y/o correo no existe en nuestra base de datos, intenta de nuevo");
            }
            this.dialogRef.close();    
        })
    }

    OpenSnack(message:string){
        this.snackBar.open(message, 'action', {
            duration: 3000,
            horizontalPosition: "start",
            verticalPosition: 'bottom',
          })
    }
  }