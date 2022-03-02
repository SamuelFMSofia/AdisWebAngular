import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { CreateService } from '../../services/Aplicacion/create/create.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UnidadTecnicaService } from '../../services/unidadTecnica/Create/unidad-tecnica.service';
import { NotificacionService } from '../../services/notificacion/notificacion.service';
import { ListService } from '../../services/SubAplicacion/list/list.service';
import { subAplicacionInterface } from '../../interfaces/SubAplicacion/subAplicacionInterface';
import { MatTableDataSource } from '@angular/material/table';
interface Food {
  value: number;
  viewValue: string;
}
interface unidadTecnica{
  idDptoTecnico:number; nombre : string
}

export interface PeriodicElement {
  name: string;

  weight: number;
  symbol: string;
}




@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./../../style/styleCrear.scss'],
})
export class CreateComponent implements OnInit {

  displayedColumns: string[] = ['nombre', 'estado', 'action'];
  dataSource:any=[];

  estados: Food[] = [
    {value: 1, viewValue: 'Activo'},
    {value: 2, viewValue: 'Pasivo'}];
    selectedFood = this.estados[1].value;

    FormAplicacion: FormGroup;

    //unidad Tecnica
    unidadTecnicas:unidadTecnica[]=[];

    selectedUnidadTecnica:unidadTecnica={
      idDptoTecnico: 0,
      nombre: ''
    };

    /**check */

  sending=false;
  hide=true;
  estadoCheck=false;
  color: ThemePalette = 'accent';
  disabled = false;

  constructor(
    private formBuilder: FormBuilder,
    private service: CreateService,
    public subAplica: ListService,
    private router:      Router,
    public snackbar: MatSnackBar,
    public unidad: UnidadTecnicaService,
    public notifyService: NotificacionService,
  ) {
    this.FormAplicacion=this.formBuilder.group({
      Nombre:['', Validators.required],
      IdDptoTecnico:['', Validators.required],
      TieneSubAplica:0,
      estado:1,
    })
   }

  ngOnInit(): void {
    this.unidad.listarUnidadTercnica().subscribe((data:any)=>{
      console.log(data);
      let result=data.data;
      this.unidadTecnicas=result.filter(value => value.estado == 1);
    });
    this.subAplica.listarSubAplicacion().subscribe((data1:any)=>{
      console.log(data1)
      const ELEMENT_DATA: subAplicacionInterface[]=data1.data;
      this.dataSource = new MatTableDataSource(ELEMENT_DATA);
    })
  }


  submit(){

    this.service.createAplicacion(this.FormAplicacion.value).subscribe((data:any)=>{
      console.log(data);
      //localStorage.setItem('userCode', data.result.userCode);
      this.showToasterSuccess()
        //window.location.reload();

        this.router.navigateByUrl('/dashboard/Aplicacion')
    })

    }


  onChangeEstado(enable: boolean) {
    if (enable) {
      this.estadoCheck=true;
      this.FormAplicacion.patchValue({TieneSubAplica:"1"});
    } else {
      this.estadoCheck=false;
      this.FormAplicacion.patchValue({TieneSubAplica:"0"});
    }
  }

  cancelar(){
    this.snackbar.open('Cancelado ', 'action', {
      duration: 100,
      horizontalPosition: "start",
      verticalPosition: 'bottom',
      
    })
      //window.location.reload();
     
      this.router.navigate(['/dashboard/Aplicacion'])

  }

  showToasterSuccess() {
    this.notifyService.showSuccess(
      'Correctamente.."',
      'APLICACION CREADO..!'

    );
  }

  update(subAplicacion:subAplicacionInterface){

  }
}
