import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-textfield',
  templateUrl: './textfield.component.html',
  styleUrls: ['./textfield.component.scss']
})
export class TextfieldComponent implements OnInit {
  @Input() textfield: Textfield;
  constructor() {}

  ngOnInit() {}
}

export interface Textfield {
  name: string;
  value: string;
  placeholder: string;
}
