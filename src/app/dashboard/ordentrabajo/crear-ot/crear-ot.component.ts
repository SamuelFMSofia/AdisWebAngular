import { Component, OnInit, ViewChild } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import { UNIDAD_TECNICA_DATA } from 'src/data/OT_DATA';


const UNI_TECNICA_DATA = UNIDAD_TECNICA_DATA;


@Component({
  selector: 'app-crear-ot',
  templateUrl: './crear-ot.component.html',
  styleUrls: ['./crear-ot.component.scss']
})
export class CrearOTComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
