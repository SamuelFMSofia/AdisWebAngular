import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { MusersServiceService } from '../../services/musersService/musers-service.service';

@Component({
  selector: 'app-modifyusers',
  templateUrl: './modifyusers.component.html',
  styleUrls: ['./modifyusers.component.scss']
})
export class ModifyusersComponent implements OnInit {

  form=new FormGroup({
    Email:new FormControl(),
    Cargo:new FormControl(),
    UnidadOrg:new FormControl(),
    Empresa:new FormControl(),
    Gerencia:new FormControl(),
    Locacion:new FormControl(),
    Sucursal:new FormControl(),
  });
  IdUsr:number;
  constructor(
    private formBuilder: FormBuilder,
    private service: MusersServiceService,
    private router: Router
  ) {
    this.IdUsr=8198090;
   let result =this.getdata(this.IdUsr);
     this.form=formBuilder.group({
      Email: [result.data.userCode],
      Cargo: [result.data.nombre_Completo],
      UnidadOrg: [result.data.tipoUsuario],
      Empresa: [''],
      Gerencia: [''],
      Locacion: [''],
      Sucursal: ['']
    });
  
   /// this.form.controls.get("Empresa").setValue('abc');

   }

   getdata(idUser:number) {
    let dataresult={
      "status": 1,
      "data":
        {
          "idUser": 1,
          "userCode": "8198090",
          "nombre_Completo": "ANTELO MANSILLA, LUIS OCTAVIO",
          "correo": "example@hotmail.com",
          "tipoUsuario": "SUPER USER",
          "idPerfil": 1,
          "diasExpiracion": 45,
          "estado": 0,
          "siglaUO": "DA",
          "idDptoTecnico": 0,
          "empresa": "Avicola Sofia Ltda.",
          "gerencia": "Gerencia de Sistemas",
          "locacion": "Edificio Administrativo 4to anillo",
          "nombreAprobador": null
        }
    };

   /* this.service.getUsuserById(idUser).subscribe((data:any)=>{
      console.log(data);
      dataresult= data;
    })*/
    return dataresult;
}
  onSubmit() {

    this.service.modifyUsers(this.form.value).subscribe((data:any)=>{
      console.log(data);
      this.router.navigate(['dashboard'])
    })
    console.log(this.form.value);
}
ngOnInit(): void {
}


}
