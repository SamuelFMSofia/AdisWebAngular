import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import { UNIDAD_TECNICA_LIST_DATA, OT_TIPO_LIST_DATA, OT_APLICACION_LIST_DATA } from 'src/data/OT__TEST_DATA';
import { SubtipoOTdto, TipoOTdto } from '../../interfaces/OrdenesTrabajo/TipoOTdto';
import { PriorityDto, UnidadTecnicaOTdto } from '../../interfaces/OrdenesTrabajo/UnidadTecnicaOTdto';
import { trigger, state, stagger, style, animate, transition, query } from "@angular/animations";
import { AplicacionOTdto, SubAplicacionOTdto } from '../../interfaces/OrdenesTrabajo/AplicacionOTdto';
import { OTCreationDto, UserOtSimplifiedDto, EstadoOtDto, defaultOT } from '../../interfaces/OrdenesTrabajo/OTCreationDto';

@Component({
  selector: 'app-crear-ot',
  templateUrl: './crear-ot.component.html',
  styleUrls: ['./crear-ot.component.scss'],
  animations: [
    trigger('priorityFieldsTrigger', [
      state('closed', style({
        height: '0px'
      })),
       state('open', style({
        height: '*'
      })),
      transition('open <=> closed', [
        animate('0.4s')
      ]),
    ]),

    trigger('subElementsTrigger', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(-10%)' }),
        animate('300ms', style({ opacity: 1, transform: 'translateX(0)'})),
      ]),
      transition(':leave', [
        animate('300ms', style({ opacity: 0, transform: 'translateX(-10%)' }))
      ]),
    ])
  ]
})
export class CrearOTComponent implements OnInit {

  @ViewChild('inputFile') inputFile: ElementRef;


  //OT CREADA
  OT : OTCreationDto;

  uniTecnicaFormControl = new FormControl();
  uniTecnicaList = UNIDAD_TECNICA_LIST_DATA;

  priorityFormControl = new FormControl();
  priorityList: PriorityDto[] = [];

  tipoOtFormControl = new FormControl();
  tipoOtCompleteListData : TipoOTdto[] = OT_TIPO_LIST_DATA;
  tipoOtListFilteredByDpto : TipoOTdto[] = [];

  subtipoOtFormControl = new FormControl();
  subtipoOtList: SubtipoOTdto[] = [];

  aplicacionOtFormControl = new FormControl();
  aplicacionOtCompleteListData : AplicacionOTdto[] = OT_APLICACION_LIST_DATA;
  aplicacionOtListFilteredByDpto : AplicacionOTdto[] = [];

  subAplicacionOtFormControl = new FormControl();
  subAplicacionOtList : SubAplicacionOTdto[] = [];

  tecnicosFormControl = new FormControl();
  tecnicosList = [];

  carbonCopyFormControl = new FormControl();

  asuntoFormControl = new FormControl();


  //file management
  attachedFiles : File[] = [];


  staticInfoFields : any[] = [];
  

  progress: number = 0;



  constructor() { }

  ngOnInit(): void {

    //crear el espacio en memoria para el objeto OT
    this.OT = defaultOT();

    let estado = {
      IdEstado: 1,
      Nombre: "No ha sido enviada"
    };

    let solicitante = {
      IdUser: 4,
      Nombre: "Luis Octavio Antelo Mansilla",
      CI: "8198090 SC",
      Correo: "luis.antm@hotmail.com",
      Empresa: {
        Id: 35,
        Nombre: "MIAS"
      }
    }

    this.setDefaultOtFields(solicitante, estado);
    this.setInfoFieldsList();

  }


  showPriorityList() : boolean {
    return  this.isUnidadTecnicaSelected() && this.isPriorityListEmpty();
  }


  isPriorityListEmpty() : boolean {
    return (this.priorityList.length == 0 || this.priorityList == []);
  }

  isSubtiposOtListEmpty() : boolean {
    return (this.subtipoOtList.length == 0 || this.subtipoOtList == [] && this.isTipoOtSelected());
  }

  isSubAplicacionesOtListEmpty() : boolean {
    return (this.subAplicacionOtList.length == 0 || this.subAplicacionOtList == [] && this.isAplicacionesOtSelected());
  }

  isUnidadTecnicaSelected() : boolean {
    let dpto = this.getUnidadTecnicaSelected();
    return dpto != null && dpto != undefined;
  }

  isTipoOtSelected() : boolean {
    let tipo = this.getTipoOtSelected();
    console.log(tipo);
    return tipo != null && tipo != undefined;
  }

  isAplicacionesOtSelected() : boolean {
    let aplicacion = this.getAplicacionOtSelected();
    return aplicacion != null && aplicacion != undefined;
  }

  getUnidadTecnicaSelected() : UnidadTecnicaOTdto {
    let dpto = this.uniTecnicaFormControl.value;
    return dpto;
  }

  getTipoOtSelected() : TipoOTdto {
    let tipoOt = this.tipoOtFormControl.value;
    return tipoOt;
  }

  getAplicacionOtSelected() : AplicacionOTdto {
    let aplicaOt = this.aplicacionOtFormControl.value;
    return aplicaOt;
  }


  /**
  * Accion que se ejecuta al seleccionar un item en
  * el campo de seleccion "Departamento"
  */
  onUnidadTecnicaSelected(){
    if (!this.isUnidadTecnicaSelected()) {
      return;
    }
    let dpto = this.getUnidadTecnicaSelected();

    this.setPrioritiesFromUnidadTecnicaSelected(dpto);
    this.setTipoOtFromUnidadTecnicaSelected(dpto);
    this.setAplicacionOtFromUnidadTecnicaSelected(dpto);
    this.setDefaultSubtiposOt();
    this.setDefaultSubAplicacionesOt();
  }

  /**
  * Accion que se ejecuta al seleccionar un item en
  * el campo de selecciön "TipoOT"
  */
  onTipoOtSelected(){
    let tipoOt = this.getTipoOtSelected();
    if (tipoOt == null || tipoOt == undefined) {
      return;
    }

    this.setSubtiposOtFromTipoOt(tipoOt);
  }


  /**
  * Accion que se ejecuta al seleccionar un item en
  * el campo de selecciön "AplicacionOT"
  */
  onAplicacionOtSelected(){
    let aplicacionOt = this.getAplicacionOtSelected();
    if (aplicacionOt == null || aplicacionOt == undefined) {
      return;
    }

    this.setSubAplicacionesOtFromAplicacionOt(aplicacionOt);
  }



  /**
  * Accion que se ejecuta al soltar un archivo en el área señalada
  */
  onFileDropped(files){
    this.fillAttachedFilesList(files);
  }


  /**
  * Accion que se ejecuta al seleccionar el botón de
  * "Selecciona tus archivos"
  */
  onInputFileSelected(){
    this.inputFile.nativeElement.click();
  }
  onUploadFile(files: FileList) {
    this.fillAttachedFilesList(files);
  }


  onRemoveAttachedFile(file : File){
    let index = this.attachedFiles.indexOf(file);
    if (this.attachedFiles.length === 1) {
      this.attachedFiles.pop();
      return;
    }
    this.attachedFiles.splice(index, 1);
  }


  calculateFileSize(size : number) : string {
    let kb = " KB.";
    let newSize = Math.round((size / 1024));
    return newSize + kb;
  }




  private fillAttachedFilesList(files: FileList){
    for (let index = 0; index < files.length; index++) {
      let file : File | null = null;
      file = files.item(index);
      console.log(file)
      if (file == null) {
          return;
      }

      this.attachedFiles.push(file);
    }
  }


  private setPrioritiesFromUnidadTecnicaSelected(dpto : UnidadTecnicaOTdto){
    this.priorityList = dpto.Prioridades;
  }

  private setTipoOtFromUnidadTecnicaSelected(dpto : UnidadTecnicaOTdto){
    let uniTecnicaId = dpto.IdDptoTecnico;
    this.tipoOtListFilteredByDpto = 
      this.tipoOtCompleteListData.filter( 
        type => type.IdDptoTecnico == uniTecnicaId
      );
  }

  private setAplicacionOtFromUnidadTecnicaSelected(dpto : UnidadTecnicaOTdto){
    let uniTecnicaId = dpto.IdDptoTecnico;
    this.aplicacionOtListFilteredByDpto = 
      this.aplicacionOtCompleteListData.filter( 
        aplica => aplica.IdDptoTecnico == uniTecnicaId
      );
  }


  private setDefaultSubtiposOt(){
    this.subtipoOtList = [];
  }

  private setDefaultSubAplicacionesOt(){
    this.subAplicacionOtList = [];
  }

  private setSubtiposOtFromTipoOt(tipoOtSelected : TipoOTdto){
    if (tipoOtSelected == null || tipoOtSelected == undefined) {
      return;
    }
    this.subtipoOtList = tipoOtSelected.Subtipos;
  }

  private setSubAplicacionesOtFromAplicacionOt(aplicacionSelected : AplicacionOTdto){
    if (aplicacionSelected == null || aplicacionSelected == undefined) {
      return;
    }
    this.subAplicacionOtList = aplicacionSelected.SubApliciones;
  }


  private setInfoFieldsList(){

    let notAssigned = "  -  ";

    let fieldName = "Número de OT";
    let fieldValue = this.OT.NumOt ?? "automático";
    let field = {Name: fieldName, Value: fieldValue}
    this.staticInfoFields.push(field);

    fieldName = "Solicitado Por";
    fieldValue = this.OT.UserSolicitante?.Nombre ?? "automático";
    field = {Name: fieldName, Value: fieldValue}
    this.staticInfoFields.push(field);

    fieldName = "Correo";
    fieldValue = this.OT.UserSolicitante?.Correo ?? notAssigned;
    field = {Name: fieldName, Value: fieldValue}
    this.staticInfoFields.push(field);

    fieldName = "Fecha";
    fieldValue = this.OT.Fecha?.toLocaleString() ?? "automático";
    field = {Name: fieldName, Value: fieldValue}
    this.staticInfoFields.push(field);

    fieldName = "Empresa";
    fieldValue = this.OT.UserSolicitante?.Empresa.Nombre ?? "automático";
    field = {Name: fieldName, Value: fieldValue}
    this.staticInfoFields.push(field);

    fieldName = "Estado";
    fieldValue = this.OT.Estado?.Nombre ?? notAssigned;
    field = {Name: fieldName, Value: fieldValue}
    this.staticInfoFields.push(field);

  }


  private setDefaultOtFields(solicitante : UserOtSimplifiedDto , estadoDefault : EstadoOtDto){

    this.OT.UserSolicitante = solicitante;
    this.OT.Fecha = new Date();
    this.OT.Estado = estadoDefault;

    console.log(this.OT);
  }

}
