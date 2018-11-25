import { Component, OnInit } from '@angular/core';
import { Textfield } from '../../atoms/textfield/textfield.component';
import { Button } from '../../atoms/button/button.component';
import { Card } from 'src/app/atoms/card/card.component';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  constructor() {}

  private namefield: Textfield;
  private okButton: Button;
  private disalbedButton: Button;
  private nakajimaCard: Card;

  ngOnInit() {
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
    this.nakajimaCard = {
      headerTitle: '中島 敦',
      headerSubtitle: '小説家',
      avatarUrl: '../../../assets/images/atsushi_nakajima.jpg',
      imgUrl: '../../../assets/images/sangetsuki.jpg',
      imgAlt: 'Photo : 山月記',
      title: '山月記',
      dateOfIssue: new Date('1969/9/20'),
      content:
        '隴西ろうさいの李徴りちょうは博学才穎さいえい、天宝の末年、若くして名を虎榜こぼうに連ね、ついで江南尉こうなんいに補せられたが、性、狷介けんかい、自みずから恃たのむところ頗すこぶる厚く、賤吏せんりに甘んずるを潔いさぎよしとしなかった。いくばくもなく官を退いた後は、故山こざん、※(「埒のつくり＋虎」、第3水準1-91-48)略かくりゃくに帰臥きがし、人と交まじわりを絶って、ひたすら詩作に耽ふけった。下吏となって長く膝ひざを俗悪な大官の前に屈するよりは、詩家としての名を死後百年に遺のこそうとしたのである。しかし、文名は容易に揚らず、生活は日を逐おうて苦しくなる。李徴は漸ようやく焦躁しょうそうに駆られて来た。この頃ころからその容貌ようぼうも峭刻しょうこくとなり、肉落ち骨秀ひいで、眼光のみ徒いたずらに炯々けいけいとして、曾かつて進士に登第とうだいした頃の豊頬ほうきょうの美少年の俤おもかげは、何処どこに求めようもない。数年の後、貧窮に堪たえず、妻子の衣食のために遂ついに節を屈して、再び東へ赴き、一地方官吏の職を奉ずることになった。一方、これは、己おのれの詩業に半ば絶望したためでもある。曾ての同輩は既に遥はるか高位に進み、彼が昔、鈍物として歯牙しがにもかけなかったその連中の下命を拝さねばならぬことが、往年の儁才しゅんさい李徴の自尊心を如何いかに傷きずつけたかは、想像に難かたくない。彼は怏々おうおうとして楽しまず、狂悖きょうはいの性は愈々いよいよ抑え難がたくなった。一年の後、公用で旅に出、汝水じょすいのほとりに宿った時、遂に発狂した。或ある夜半、急に顔色を変えて寝床から起上ると、何か訳の分らぬことを叫びつつそのまま下にとび下りて、闇やみの中へ駈出かけだした。彼は二度と戻もどって来なかった。附近の山野を捜索しても、何の手掛りもない。その後李徴がどうなったかを知る者は、誰だれもなかった。',
      actionButton1: 'LIKE',
      actionButton2: 'SHARE'
    };
  }
  clickOKButton(event: any): void {
    console.log(event.target.innerText);
  }
}
