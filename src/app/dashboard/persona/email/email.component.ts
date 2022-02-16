import { FormGroup, FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { EmailService } from '../../services/email/email.service';
import { ListarusersService } from '../../services/usuarios/listusers/listarusers.service';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss']
})
export class EmailComponent implements OnInit {


  resetEmailForm: FormGroup;
  idUser:number;

  constructor(private fb: FormBuilder,
    private router:Router,
    private service: EmailService,
    public snackBar: MatSnackBar,
    public user:ListarusersService
  ) {
    this.resetEmailForm=this.fb.group({ idUser:[''],
    OldEmail:[''],
    NewEmail:['']
  })
   }

  ngOnInit(): void {
    this.user.getUser().subscribe((data:any)=>{
      //direcionaa ala pagina requerida
      console.log(data)
    // this.unidadTecnicas=data.data;
    });
  }

  onSubmit(){
    let idUser:number =0;
      idUser=parseInt(localStorage.getItem("idUser") as string);
    this.service.modificarEmail(idUser, this.resetEmailForm.value).subscribe((data)=>{
      this.snackBar.open('Modificado Correctamente ', 'action', {
        duration: 2000,
        horizontalPosition: "start",
        verticalPosition: 'bottom',
      }).afterDismissed().subscribe(() => {

        this.router.navigate(['/editperfil'])
        window.location.reload();
      });

    });
  }


}
