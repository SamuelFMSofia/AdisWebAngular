import { FormBuilder, Validators} from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modifyperson',
  templateUrl: './modifyperson.component.html',
  styleUrls: ['./modifyperson.component.scss']
})
export class ModifypersonComponent implements OnInit {
  form;
  constructor(
    private formBuilder: FormBuilder
  ) {
    this.form = formBuilder.group({
      UserCode: [''],
      Email: [''],
      Cargo: [''],
      UnidadOrg: [''],
      Empresa: [''],
      Gerencia: [''],
      Locacion: [''],
      Sucursal: [''],
      NroDocAprobador: [''],

    });
   }

  ngOnInit(): void {
  }

  submit() {
    if (this.form.valid) {
      console.log(this.form.value)
    }
    else{
      alert("FILL ALL FIELDS")
    }
  }

}
