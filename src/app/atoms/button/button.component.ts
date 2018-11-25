import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() button: Button;
  constructor() {}

  ngOnInit() {}
}

export interface Button {
  title: string;
  color: string;
  disable: boolean;
  clickButton(event: any): void;
}
