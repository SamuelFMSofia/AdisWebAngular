import { CrudService } from './../../services/crud.service';
import { Component, OnInit } from '@angular/core';
import { clientUserInterface } from '../../interfaces/interfacesL/clientUserInterface';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { EditpersonComponent } from '../editperson/editperson.component';

@Component({
  selector: 'app-client-user',
  templateUrl: './client-user.component.html',
  styleUrls: ['./client-user.component.scss']
})
export class ClientUserComponent implements OnInit {
  dataSource:any = [];
  displayedColumns: string[] = ['ID', 'name','last_name', 'gmail', 'acciones']


  constructor(private services: CrudService,
              private dialog: MatDialog  
    ) { }

  ngOnInit(): void {

    //realiza la verificacion
    // se va a la parte de back end al controlador para verificar los autorizado
      this.services.getclienUser().subscribe((data:any)=>{
         //este datasource son datos que devuelven la tabla usuario
         this.dataSource = new MatTableDataSource<clientUserInterface>(data.result as clientUserInterface[]);
          console.log(data);
      });
  }
  upgradeusers(person: clientUserInterface){
    console.log(person);
    this.dialog.open(EditpersonComponent, {
    data:{
      UserCode: person.UserCode,
      Email: person.Email,
        Cargo: person.Cargo,
        UnidadOrg: person.UnidadOrg,
        Empresa: person.Empresa,
        Gerencia: person.Gerencia,
        Locacion: person.Locacion,
        Sucursal: person.Sucursal,
        NroDocAprobador:person.NroDocAprobador
      
    } 
    })
  }

}
