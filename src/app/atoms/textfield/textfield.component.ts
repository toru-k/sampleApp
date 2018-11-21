import { Component, OnInit } from '@angular/core';
import { TextfieldObj } from './textfield';

@Component({
  selector: 'app-textfield',
  templateUrl: './textfield.component.html',
  styleUrls: ['./textfield.component.scss']
})
export class TextfieldComponent implements OnInit {
  textfield: TextfieldObj;
  constructor() {}

  ngOnInit() {}

  setObject(params: TextfieldObj): void {
    this.textfield = params;
  }
}
