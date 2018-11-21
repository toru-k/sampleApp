import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-textfield',
  templateUrl: './textfield.component.html',
  styleUrls: ['./textfield.component.scss']
})
export class TextfieldComponent implements OnInit {
  textfield: TextfieldParams;
  constructor() {}

  ngOnInit() {}

  setObject(params: TextfieldParams): void {
    this.textfield = params;
  }
}

export class TextfieldParams {
  name: string;
  value: string;
  placeholder: string;

  constructor(name: string, value: string, placeholder: string) {
    this.name = name;
    this.value = value;
    this.placeholder = placeholder;
  }
}
