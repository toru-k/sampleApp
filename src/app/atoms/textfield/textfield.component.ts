import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-textfield',
  templateUrl: './textfield.component.html',
  styleUrls: ['./textfield.component.scss']
})
export class TextfieldComponent implements OnInit {
  textfield: Textfield;
  constructor() {}

  ngOnInit() {}

  setObject(params: Textfield): void {
    this.textfield = params;
  }
}

export interface Textfield {
  name: string;
  value: string;
  placeholder: string;
}
