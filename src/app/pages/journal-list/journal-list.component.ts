import { Component, OnInit } from '@angular/core';
import { Textfield } from '../../atoms/textfield/textfield.component';
import { Button } from '../../atoms/button/button.component';

@Component({
  selector: 'app-journal-list',
  templateUrl: './journal-list.component.html',
  styleUrls: ['./journal-list.component.scss']
})
export class JournalListComponent implements OnInit {
  constructor() {}

  private namefield: Textfield;
  private okButton: Button;
  private disalbedButton: Button;

  ngOnInit() {
    this.namefield = {
      name: 'test1',
      value: '入力済みです',
      placeholder: '値を設定してください'
    };
    this.okButton = {
      title: 'OK',
      color: 'primary',
      disable: false
    };
    this.disalbedButton = {
      title: 'disabled',
      color: 'primary',
      disable: true
    };
  }
}
