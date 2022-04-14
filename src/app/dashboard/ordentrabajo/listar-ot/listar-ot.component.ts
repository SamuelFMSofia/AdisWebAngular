import { Component, OnInit, ViewChild } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import { UnidadTecnicaSimpleInterface } from '../../interfaces/unidad_tecnica/unidadTecnicaSimpleInterface';
import { OTtoListInterface } from '../../interfaces/OrdenesTrabajo/OTtoListInterface';
import {MatTableDataSource} from '@angular/material/table';
import { setDateFromString, isDateInRange } from 'src/app/utils/DateHandler';
import { OT_LIST_DATA, OT_STATUS_LIST_DATA, UNIDAD_TECNICA_LIST_DATA } from 'src/data/OT__TEST_DATA';
/**
 * 
 * Test DATA
 * 
 */

const uniTecnicaData = UNIDAD_TECNICA_LIST_DATA;
const statusListData = OT_STATUS_LIST_DATA;


@Component({
  selector: 'app-listar-ot',
  templateUrl: './listar-ot.component.html',
  styleUrls: ['./listar-ot.component.scss']
})

export class ListarOTComponent implements OnInit {

  isFilterActivated = false;
  isFilterSelected = false;
  showMoreFilters =false;
  showResetSearchButton = false;
  listReady = true;
  showNotification = true;

  searchInputText = '';
  searchFormControl = new FormControl();
  searchInputPlaceholder = '';


  fastFilterFormControl = new FormControl();
  fastFilterPicked: string;

  fastFilters: any[] = [
    { 
      id: 1,
      name:'Solicitudes del mes'
    },
    { 
      id: 2,
      name:'Solicitudes de los últimos 60 días'
    }
  ];

  dateRange = new FormGroup({
    start: new FormControl(),
    end: new FormControl(),
  });

  uniTecnicaFormControl = new FormControl();
  uniTecnicaList = uniTecnicaData;

  statusFormControl = new FormControl(); 
  statusList = statusListData;
  statusDefaultFilterSelected = [1, 4, 5, 6];
  statusToHighlight = [3, 4, 5];

  columns = [
    {
      columnDef: 'OTnumber',
      header: 'Nro.',
      cell: (element: OTtoListInterface) => `${element.Nro}`,
    },
    {
      columnDef: 'Asunto',
      header: 'Asunto',
      cell: (element: OTtoListInterface) => `${element.Asunto}`,
    },
    {
      columnDef: 'AsignadoA',
      header: 'Asignado A',
      cell: (element: OTtoListInterface) => `${element.AsignadoA}`,
    },
    {
      columnDef: 'Fecha',
      header: 'Fecha',
      cell: (element: OTtoListInterface) => `${element.Fecha}`,
    },
    {
      columnDef: 'FechaAsignacion',
      header: 'Fecha de Asignación',
      cell: (element: OTtoListInterface) => `${element.FechaAsignacion}`,
    },
    {
      columnDef: 'Departamento',
      header: 'Departamento',
      cell: (element: OTtoListInterface) => `${element.Departamento}`,
    },
    {
      columnDef: 'Tipo',
      header: 'Tipo',
      cell: (element: OTtoListInterface) => `${element.Tipo}`,
    },
    {
      columnDef: 'Estado',
      header: 'Estado',
      cell: (element: OTtoListInterface) => `${element.Estado.name}`,
    }
  ];

  otList = OT_LIST_DATA;
  otListToFilter = [...this.otList];
  userOTList = new MatTableDataSource(this.otListToFilter);
  displayedColumns = this.columns.map( c => c.columnDef);



  constructor() 
  { 
    this.setDefaultStatusFilter();
    this.assignFiltersOTList();
  }
  

  ngOnInit() {
  }


  noFilterOTList(){
    this.userOTList.filter = '';
  }


  /**
   * Accion que se ejecuta al darle click a la lupita
   */
  searchOT(){
    this.assignFiltersOTList();
  }


  assignFiltersOTList(){
    this.userOTList.data = this.filterOTs(this.otList);
    this.userOTList.sortingDataAccessor = (item, prop) => {
      switch (prop) {
        case 'Fecha':  return setDateFromString(item.Fecha);
        default: return item[prop];
      }
    };
  }


  filterOTs(otListToFilter: OTtoListInterface[]) : OTtoListInterface[]{
    let filteredByDates = this.filterByDateRange(otListToFilter);
    let filteredByStatus = this.filterByStatus(filteredByDates);
    let filteredByUniTecnica = this.filterByUniTecnica(filteredByStatus);
    return filteredByUniTecnica;
  }


  closeNotification(){
    this.showNotification = false;
  }


  /**
   * Accion que se ejecuta al escribir algo en el campo
   * de texto de búsqueda (buscar, search)
   */
   onChangeSearchInputText(event: Event){
    const filterValue = (event.target as HTMLInputElement).value;
    this.userOTList.filter = filterValue.trim().toLowerCase(); 
    this.showResetFiltersButton();
  }


  /**
   * Accion que se ejecuta cada que se selecciona un 
   * campo en el radio button de filtros
   */
  onFastFiltersChange(event: any){
    this.fastFilterPicked = event.value;
    this.isFilterSelected = true;
    this.showResetFiltersButton();
    this.setFastFilters();
  }

  /**
   * Accion que se ejecuta al seleccionar una fecha
   * manualmente en el rango de fechas
   */
  onDateRangeSelected() {
    this.assignFiltersOTList();
    this.resetFastFilter();
  }


  /**
   * Accion que se ejecuta al seleccionar un item en
   *  el filtro select de Departamento Tecnico
   */
   onUnidadTecnicaFilterSelected() {
    this.assignFiltersOTList();
    this.showResetFiltersButton();
  }

  
  /**
   * Accion que se ejecuta al seleccionar un item en
   * el filtro select de Estados de la OT
   */
   onStatusFilterSelected(){
    this.assignFiltersOTList();
    this.showResetFiltersButton();
  }

  /**
   * Accion que se ejecuta al darle click al botón X
   * que aparece en el campo de búsqueda y se encarga de
   * limpiar todos los filtros seleccionados
   */
  resetSearchParams(){
    this.isFilterSelected = false;
    this.noFilterOTList();
    this.resetSearchInputForm();
    this.resetFastFilter();
    this.resetDateRange();
    this.resetToZeroStatusFilter();
    this.resetUniTecnicaFilter();
    this.showResetSearchButton = !this.showResetSearchButton;
    this.assignFiltersOTList();
  }


  showFilters(){
    this.isFilterActivated = !this.isFilterActivated;
    this.showMoreFilters = false;
  }


  isHighlightedStatus(statusId: number): boolean {
    return this.statusToHighlight.includes(statusId);
  }


  private showResetFiltersButton(){
    let flag = 
        this.isFilterActivated 
        || this.searchInputText != '';
    
    flag ? 
      this.showResetSearchButton = true  :
      this.showResetSearchButton = false;
  }


  private setFastFilters(){

    switch (this.fastFilterPicked) {
      case 'Solicitudes del mes':
        this.setDateWithLastMonthRange();
        break;
 
      case 'Solicitudes de los últimos 60 días':
        this.setDateWithDaysRange(60);
        break;
    
      default:
        break;
    }

    this.assignFiltersOTList();
  }


  private setDateWithLastMonthRange(){
    let today = new Date();
    let firstDayOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
    this.setDateRange(firstDayOfMonth, today);
  }


  private setDateWithDaysRange(daysRange : number){
    let today = new Date();
    let dateBefore = this.sumarDias(today, - daysRange);
    this.setDateRange(dateBefore, today);
  }


  private setDateRange(start : Date, end : Date){
    this.dateRange.controls['start'].setValue(start);
    this.dateRange.controls['end'].setValue(end);
  }


  private sumarDias( date : Date, days : number) : Date {
    let newDate = new Date();
    newDate.setDate(date.getDate() + days);
    return newDate;
  }


  private resetSearchInputForm(){
    this.searchFormControl.reset();
  }


  private resetFastFilter() {
    this.fastFilterFormControl.reset();
  }


  private resetDateRange(){
    this.dateRange.controls['start'].setValue(null);
    this.dateRange.controls['end'].setValue(null);
  }


  resetUniTecnicaFilter(){
    this.uniTecnicaFormControl.reset();
  }


  private resetToZeroStatusFilter(){
    this.statusFormControl.reset();
  }


  private setDefaultStatusFilter(){
    let list = new Array();
    statusListData.forEach(e => {
      if (this.statusDefaultFilterSelected.includes(e.id)) {
        list.push(e);
      }
    });
    this.statusFormControl.setValue(list);
  }


  private filterByDateRange(otFilteredList : OTtoListInterface[]): OTtoListInterface[]{
    let startDate : Date;
    let endDate : Date;
    startDate = this.dateRange.controls['start'].value;
    endDate = this.dateRange.controls['end'].value;
    console.log(startDate);

    if (startDate == null) {
      return otFilteredList;
    }

    if (endDate == null) {
      endDate = startDate;
    }

    return otFilteredList.filter( 
      ot => isDateInRange(ot.Fecha, startDate, endDate)
    );
  }


  private filterByStatus(otFilteredList : OTtoListInterface[]): OTtoListInterface[]{
    let statusArray = new Array();
    statusArray = this.statusFormControl.value;
    if (statusArray == null || statusArray.length == 0) {
      return otFilteredList;
    }

    let statusIds = statusArray.map( s => s.id);
    return otFilteredList.filter( 
      ot =>  statusIds.includes(ot.Estado.id)
    );
  }


  private filterByUniTecnica(otFilteredList : OTtoListInterface[]): OTtoListInterface[]{
    let dptoSelected = this.uniTecnicaFormControl.value;
    if (dptoSelected == null) {
      return otFilteredList;
    }

    let nameDptoSelected : string;
    nameDptoSelected = dptoSelected.nombre.toLowerCase();
    return otFilteredList.filter( 
      ot => 
        ot.Departamento.toLowerCase().localeCompare(nameDptoSelected) == 0
    );
  }

}
