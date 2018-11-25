import { Component, OnInit } from '@angular/core';
import { Link } from '../../atoms/link/link.component';

@Component({
  selector: 'app-error404',
  templateUrl: './error404.component.html',
  styleUrls: ['./error404.component.scss']
})
export class Error404Component implements OnInit {
  private homeLink: Link;
  constructor() {}

  ngOnInit() {
    this.homeLink = {
      title: 'Home',
      url: '/list'
    };
  }
}
