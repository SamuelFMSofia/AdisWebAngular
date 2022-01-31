import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { CreateSubtipoService } from '../../services/subTipoOT/create/create-subtipo.service';
interface Food {
  value: number;
  viewValue: string;
}
@Component({
  selector: 'app-crear-subtipo',
  templateUrl: './crear-subtipo.component.html',
  styleUrls: ['./crear-subtipo.component.scss']
})
export class CrearSubtipoComponent implements OnInit {
  Estado: any[] = ['Activo', 'Pasivo'];
  FormSubtipo: FormGroup;

  estados: Food[] = [
    {value: 1, viewValue: 'Activo'},
    {value: 2, viewValue: 'Inactivo'}];
    foodControl = new FormControl(this.estados[1]);

  constructor(
    private formBuilder: FormBuilder,
    private service:     CreateSubtipoService,
    private router:      Router,
    public snackbar: MatSnackBar
  ) {  this.FormSubtipo=this.formBuilder.group({
    Nombre:['', Validators.required],
    IdDptoTecnico:['', Validators.required],
    IdTipoOT:['',],
    estado:[''],
  })}

  ngOnInit(): void {
    estado: this.foodControl
  }

  submit(){


    this.service.createSubtipo(this.FormSubtipo.value).subscribe((data:any)=>{
      console.log(data);
      //localStorage.setItem('userCode', data.result.userCode);
      this.snackbar.open('Creado Correctemante ', 'action', {
        duration: 1000,
        horizontalPosition: "start",
        verticalPosition: 'bottom',
      }).afterDismissed().subscribe(() => {
        window.location.reload();
        this.router.navigate(['/'])

      });


    }

    )

  }

}
