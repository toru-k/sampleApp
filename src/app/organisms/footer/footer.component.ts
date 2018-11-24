import { Component, OnInit } from '@angular/core';
import { Icon } from '../../atoms/icon/icon.component';
import { IconButton } from '../../atoms/icon-button/icon-button.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  private homeIconButton: IconButton;
  private searchicon: Icon;
  private historyicon: Icon;
  private viewlisticon: Icon;
  constructor() {}

  ngOnInit() {
    this.homeIconButton = {
      name: 'home',
      color: 'warn',
      disable: false
    };
    this.searchicon = { name: 'search' };
    this.historyicon = { name: 'history' };
    this.viewlisticon = { name: 'list' };
  }
}
