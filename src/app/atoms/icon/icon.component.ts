import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {
  private icon: Icon;
  constructor() {}

  ngOnInit() {}

  setIcon(icon: Icon): void {
    this.icon = icon;
  }
}

export interface Icon {
  name: string;
}
