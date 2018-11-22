import { Component, OnInit } from '@angular/core';
import { Textfield } from '../../atoms/textfield/textfield.component';

@Component({
  selector: 'app-journal-list',
  templateUrl: './journal-list.component.html',
  styleUrls: ['./journal-list.component.scss']
})
export class JournalListComponent implements OnInit {
  constructor() {}

  private namefield: Textfield;

  ngOnInit() {
    this.namefield = {
      name: 'test1',
      value: '入力済みです',
      placeholder: '値を設定してください'
    };
  }
}
