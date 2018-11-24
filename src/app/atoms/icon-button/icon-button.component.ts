import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-icon-button',
  templateUrl: './icon-button.component.html',
  styleUrls: ['./icon-button.component.scss']
})
export class IconButtonComponent implements OnInit {
  @Input() iconButton: IconButton;
  constructor() {}

  ngOnInit() {}
}

export interface IconButton {
  name: string;
  color: string;
  disable: boolean;
}
