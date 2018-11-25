import { Textfield } from '../atoms/textfield/textfield.component';
import { Button } from '../atoms/button/button.component';
import { Card } from '../atoms/card/card.component';
import { NovelRepositoryService } from '../repositories/novel-repository.service';

export class DetailServiceService {
  namefield: Textfield;
  okButton: Button;
  disalbedButton: Button;
  card: Card;

  constructor(private repository: NovelRepositoryService) {
    this.init(0);
  }

  clickBack(event: any): void {
    console.log(event.target.innerText + '!');
  }
  clickPrev(event: any): void {
    console.log(event.target.innerText + '!');
  }

  clickOKButton(event: any): void {
    console.log(event.target.innerText);
  }

  init(index: number) {
    this.namefield = {
      name: 'test1',
      value: '入力済みです',
      placeholder: '値を設定してください'
    };
    this.okButton = {
      title: 'OK',
      color: 'primary',
      disable: false,
      clickButton: this.clickOKButton
    };
    this.disalbedButton = {
      title: 'disabled',
      color: 'primary',
      disable: true,
      clickButton: function clickDisabledButton(event: any): void {
        console.log(event.target.innerText);
      }
    };
    const novel = this.repository.getNovel(index);
    this.card = {
      headerTitle: novel.headerTitle,
      headerSubtitle: novel.headerSubtitle,
      avatarUrl: novel.avatarUrl,
      imgUrl: novel.imgUrl,
      imgAlt: novel.imgAlt,
      title: novel.title,
      dateOfIssue: novel.dateOfIssue,
      content: novel.content,
      actionTitle1: 'BACK',
      actionTitle2: 'PREV',
      action1: this.clickBack,
      action2: this.clickPrev,
      actionLink1: '/list',
      actionLink2: '/input'
    };
  }
}
