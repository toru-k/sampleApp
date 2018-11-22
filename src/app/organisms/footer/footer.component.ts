import { Component, OnInit } from '@angular/core';
import { Icon } from '../../atoms/icon/icon.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  private homeicon: Icon;
  private searchicon: Icon;
  private historyicon: Icon;
  private viewlisticon: Icon;
  constructor() {}

  ngOnInit() {
    this.homeicon = { name: 'home' };
    this.searchicon = { name: 'search' };
    this.historyicon = { name: 'history' };
    this.viewlisticon = { name: 'list' };
  }
}
