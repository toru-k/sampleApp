import { Component, OnInit } from '@angular/core';
import { Link } from '../../atoms/link/link.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  private detailLink: Link;
  private inputLink: Link;
  constructor() {}

  ngOnInit() {
    this.detailLink = {
      title: '詳細画面へ',
      url: '/detail'
    };

    this.inputLink = {
      title: '入力画面へ',
      url: '/input'
    };
  }
}
