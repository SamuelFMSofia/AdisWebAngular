import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolbar-title-form',
  templateUrl: './toolbar-title-form.component.html',
  styleUrls: ['./toolbar-title-form.component.scss']
})
export class ToolbarTitleFormComponent implements OnInit {
  @Input() titleForm: string="";
  constructor() { }

  ngOnInit(): void {
  }

}
