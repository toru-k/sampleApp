import { Component, OnInit, ViewChild } from '@angular/core';
import { Icon, IconComponent } from '../../atoms/icon/icon.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  @ViewChild(IconComponent)
  private iconComponent: IconComponent;
  private homeIcon: Icon;
  constructor() {}

  ngOnInit() {
    this.homeIcon = { name: 'home' };
    this.iconComponent.setIcon(this.homeIcon);
  }
}
