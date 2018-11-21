import { Component, OnInit, ViewChild } from '@angular/core';
import { TextfieldObj } from '../../atoms/textfield/textfield';
import { TextfieldComponent } from '../../atoms/textfield/textfield.component';

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
    const textfieldObj: TextfieldObj = new TextfieldObj(
      'test1',
      '入力済みです',
      '値を設定してください'
    );
    this.textfieldComponent.setObject(textfieldObj);
  }
}
