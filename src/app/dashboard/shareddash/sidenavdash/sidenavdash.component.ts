import { Component, OnInit, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';
declare const $: any;

@Component({
  selector: 'app-sidenavdash',
  templateUrl: './sidenavdash.component.html',
  styleUrls: ['./sidenavdash.component.scss']
})
export class SidenavdashComponent implements OnInit {
  @ViewChild(MatAccordion) accordion: MatAccordion;
  constructor() { }

  ngOnInit(): void {
  }



}

