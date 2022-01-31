import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, ValidatorFn, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { CreateService } from '../../services/tipoOT/create/create.service';
interface Food {
  value: number;
  viewValue: string;
}
@Component({
  selector: 'app-crear-tipo',
  templateUrl: './crear-tipo.component.html',
  styleUrls: ['./crear-tipo.component.scss']
})
export class CrearTipoComponent implements OnInit {
  Estado: any[] = ['Activo', 'Pasivo'];
  FormTipo: FormGroup;

  estados: Food[] = [
    {value: 1, viewValue: 'Activo'},
    {value: 2, viewValue: 'Inactivo'}];
    foodControl = new FormControl(this.estados[1]);


  constructor(
    private formBuilder: FormBuilder,
    private service:     CreateService,
    private router:      Router,
    public snackbar: MatSnackBar
  ) {
    this.FormTipo=this.formBuilder.group({
      Nombre:['', Validators.required],
      IdDptoTecnico:['', Validators.required],
      IdUsrResponsable:['',],
      TieneSubTipo:[''],
      estado:[''],
    })
  }

  ngOnInit(): void {
    estado: this.foodControl
  }

  submit(){


    this.service.createTipoOT(this.FormTipo.value).subscribe((data:any)=>{
      console.log(data);
      //localStorage.setItem('userCode', data.result.userCode);
      this.snackbar.open('Creado Correctemante ', 'action', {
        duration: 1000,
        horizontalPosition: "start",
        verticalPosition: 'bottom',
      }).afterDismissed().subscribe(() => {
        window.location.reload();
        this.router.navigate(['/unidadtecnica'])

      });


    }

    )

  }

}
