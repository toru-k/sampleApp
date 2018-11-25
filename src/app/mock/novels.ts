import { Novel } from '../repositories/novel-repository';

export const NOVELS: Novel[] = [
  {
    id: 1,
    name: '中島 敦',
    headerSubtitle: '小説家',
    avatarUrl: '../../../assets/images/atsushi_nakajima.jpg',
    imgUrl: '../../../assets/images/sangetsuki.jpg',
    imgAlt: 'Photo : 山月記',
    title: '山月記',
    dateOfIssue: new Date('1969/9/20'),
    content:
      '隴西ろうさいの李徴りちょうは博学才穎さいえい、天宝の末年、若くして名を虎榜こぼうに連ね、' +
      'ついで江南尉こうなんいに補せられたが、性、狷介けんかい、自みずから恃たのむところ頗すこぶる厚く、' +
      '賤吏せんりに甘んずるを潔いさぎよしとしなかった。いくばくもなく官を退いた後は、故山こざん、' +
      '※(「埒のつくり＋虎」、第3水準1-91-48)略かくりゃくに帰臥きがし、人と交まじわりを絶って、' +
      'ひたすら詩作に耽ふけった。下吏となって長く膝ひざを俗悪な大官の前に屈するよりは、' +
      '詩家としての名を死後百年に遺のこそうとしたのである。しかし、文名は容易に揚らず、生活は日を逐おうて苦しくなる。'
  },
  {
    id: 2,
    name: '芥川 竜之介',
    headerSubtitle: '小説家',
    avatarUrl: '../../../assets/images/ryunosule_akutagawa.jpg',
    imgUrl: '../../../assets/images/aruahounoisshou.jpg',
    imgAlt: 'Photo : 或阿呆の一生',
    title: '或阿呆の一生',
    dateOfIssue: new Date('1968/8/25'),
    content:
      '僕はこの原稿を発表する可否は勿論、発表する時や機関も君に一任したいと思つてゐる。君はこの原稿の中に出て来る大抵の人物を知つてゐるだらう。' +
      'しかし僕は発表するとしても、インデキスをつけずに貰ひたいと思つてゐる。僕は今最も不幸な幸福の中に暮らしてゐる。しかし不思議にも後悔してゐない。' +
      '唯僕の如き悪夫、悪子、悪親を持つたものたちを如何いかにも気の毒に感じてゐる。ではさやうなら。僕はこの原稿の中では少くとも意識的には自己弁護をしなかつたつもりだ。'
  },
  {
    id: 3,
    name: '森 鴎外',
    headerSubtitle: '小説家',
    avatarUrl: '../../../assets/images/ougai_mori.jpg',
    imgUrl: '../../../assets/images/ヰタ・セクスアリス.jpg',
    imgAlt: 'Photo : ヰタ・セクスアリス',
    title: 'ヰタ・セクスアリス',
    dateOfIssue: new Date('1949/11/30'),
    content:
      '金井湛しずか君は哲学が職業である。哲学者という概念には、何か書物を書いているということが伴う。' +
      '金井君は哲学が職業である癖に、なんにも書物を書いていない。文科大学を卒業するときには、' +
      '外道げどう哲学と Sokrates 前の希臘ギリシャ哲学との比較的研究とかいう題で、余程へんなものを書いたそうだ。' +
      'それからというものは、なんにも書かない。'
  }
];
