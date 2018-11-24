import { Component, OnInit } from '@angular/core';
import { IconButton } from '../../atoms/icon-button/icon-button.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  private homeIconButton: IconButton;
  private searchicon: IconButton;
  private historyicon: IconButton;
  private viewlisticon: IconButton;
  constructor() {}

  ngOnInit() {
    this.homeIconButton = {
      name: 'home',
      color: 'warn',
      disable: false
    };
    this.searchicon = { name: 'search', color: 'accent', disable: false };
    this.historyicon = { name: 'history', color: '', disable: false };
    this.viewlisticon = { name: 'list', color: 'accent', disable: true };
  }
}
