import { Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { CpersonServiceService } from '../../services/cpersonService/cperson-service.service';


@Component({
  selector: 'app-createperson',
  templateUrl: './createperson.component.html',
  styleUrls: ['./createperson.component.scss']
})
export class CreatepersonComponent implements OnInit {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private service: CpersonServiceService,
    private router:Router
    ){
    this.form = this.formBuilder.group({
      Num_Doc: [''],
      Password: [''],
      Nombre_Completo: [''],
      SiglaUO: [''],
      IdUO: [''],
      UnidadOrg: [''],
      Email: [''],
      Empresa: [''],
      Gerencia: [''],
      Locacion: [''],
      Sucursal: [''],
      NroDocAprobador: [''],
      NombreAprobador: ['']

    });
  }

  ngOnInit() {
  }

  submit() {
    
    this.service.createPerson(this.form.value).subscribe((data:any)=>{
      console.log(data);
      localStorage.setItem('userCode', data.result.userCode);

      //alerta lo que me esta devolviendo el backend
      alert(data.displayMessage);
      //ruta
      this.router.navigate(['dashboard']);

    }

    )
  }

}
