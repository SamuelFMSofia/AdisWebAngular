
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { UnidadTecnicaService } from '../services/unidadTecnica/unidad-tecnica.service';

@Component({
  selector: 'app-unidatecnica',
  templateUrl: './unidatecnica.component.html',
  styleUrls: ['./unidatecnica.component.scss']
})
export class UnidatecnicaComponent implements OnInit {


  FormUnidadTecnica: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private service: UnidadTecnicaService,
    
    ) { 
      this.FormUnidadTecnica=this.formBuilder.group({
        IdDptoTecnico:[''],
        Nombre:['', Validators.required],
        sigla:['', Validators.required]
      })

    }

  ngOnInit(): void {
  }

  submit(){
    this.service.createUnidadTecnica(this.FormUnidadTecnica.value).subscribe((data:any)=>{
      console.log(data);
    })
  }

}
