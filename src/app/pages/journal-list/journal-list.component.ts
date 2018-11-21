import { Component, OnInit, ViewChild } from '@angular/core';
import {
  Textfield,
  TextfieldComponent
} from '../../atoms/textfield/textfield.component';

@Component({
  selector: 'app-journal-list',
  templateUrl: './journal-list.component.html',
  styleUrls: ['./journal-list.component.scss']
})
export class JournalListComponent implements OnInit {
  constructor() {}

  @ViewChild(TextfieldComponent)
  private textfieldComponent: TextfieldComponent;

  ngOnInit() {
    const textfield: Textfield = {
      name: 'test1',
      value: '入力済みです',
      placeholder: '値を設定してください'
    };
    this.textfieldComponent.setObject(textfield);
  }
}
