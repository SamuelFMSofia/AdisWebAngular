import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footerdash',
  templateUrl: './footerdash.component.html',
  styleUrls: ['./footerdash.component.scss']
})
export class FooterdashComponent implements OnInit {
  test : Date = new Date();
  constructor() { }

  ngOnInit(): void {
  }

}
