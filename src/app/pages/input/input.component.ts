import { Component, OnInit } from '@angular/core';
import { Link } from '../../atoms/link/link.component';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  private listLink: Link;
  constructor() {}

  ngOnInit() {
    this.listLink = {
      title: '一覧画面へ',
      url: '/list'
    };
  }
}
