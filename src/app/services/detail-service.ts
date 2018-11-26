import { ActivatedRoute } from '@angular/router';
import { Textfield } from '../atoms/textfield/textfield.component';
import { Button } from '../atoms/button/button.component';
import { Card } from '../molecules/card/card.component';
import { NovelRepository, Novel } from '../repositories/novel-repository';

export class DetailService {
  namefield: Textfield;
  okButton: Button;
  disalbedButton: Button;
  card: Card;
  novels: Novel[];
  novel: Novel;

  constructor(
    private route: ActivatedRoute,
    private repository: NovelRepository
  ) {
    const id = +this.route.snapshot.paramMap.get('id');
    this.init(id - 1);
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

  getNovel(index: number): void {
    this.repository.getNovel(index).subscribe(novel => {
      this.novel = novel;
      this.card = {
        headerTitle: this.novel.name,
        headerSubtitle: this.novel.headerSubtitle,
        avatarUrl: this.novel.avatarUrl,
        imgUrl: this.novel.imgUrl,
        imgAlt: this.novel.imgAlt,
        title: this.novel.title,
        dateOfIssue: this.novel.dateOfIssue,
        content: this.novel.content,
        actionTitle1: '一覧画面へ',
        actionTitle2: '入力画面へ',
        action1: this.clickBack,
        action2: this.clickPrev,
        actionLink1: '/list',
        actionLink2: '/input'
      };
    });
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
    this.getNovel(index);
  }
}
