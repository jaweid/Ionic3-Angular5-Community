import {Component} from '@angular/core';
import {PeopleSearch} from "../../resources/people-search/people-search";
import {NavController, NavParams} from "ionic-angular";

/**
 * Generated class for the PeopleDetailComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'people-detail',
  templateUrl: 'people-detail.html'
})
export class PeopleDetailComponent {


  public peopleDetail = new PeopleSearch();

  constructor(
    public navCtrl: NavController, public navParams: NavParams
  ) {
    this.peopleDetail = this.navParams.get('detail');
  }

  mockDetailData = {
    type: '游戏伙伴',
    labels: [
      '魔兽世界',
      '世界之树'
    ],
    description: '　一群具有神力的种族，即泰坦，组成万神殿并开始进行他们的创世之旅。萨格拉斯则是在创世之旅中负责击败许多邪恶生物的泰坦勇士。\n' +
    '　　万神殿造访艾泽拉斯星球，在建立许多实验室和创造属于自己使唤的仆人之后，对整个系统设下预定自行发展的命令后离去。\n' +
    '　　一群力量异常强大的特殊寄生生物入侵泰坦在艾泽拉斯的实验室，他们统御着该地的混乱元素们，成为该星球的首领，即上古之神。\n' +
    '一群虫类生物被上古之神改造成名为亚基的虫类种族，亚基虫人在卡利姆多大陆的东南区建立阿兹亚基帝国。\n' +
    '　　上古之神军团日益强大，它们统治艾泽拉斯的同时也感染了许多泰坦造物和仆人，将他们从无机生物变成有机生物，即后世所称的血肉诅咒。\n' +
    '　　艾泽拉斯在诸多上古之神的统治下混乱无比，其中的三个古神克苏恩、尤格萨隆、恩佐斯更是打起了无止尽的内战。\n',
    img: 'assets/imgs/mockdata/123.jpg',
    comments: [
      {
        avatar: 'assets/imgs/mockdata/user2.jpg',
        alias: '封弊者',
        date: '2018年5月18日',
        content: '哇，楼主有毅力啊。现在还没弃坑呢？'
      },
      {
        avatar: 'assets/imgs/mockdata/user2.jpg',
        alias: '封弊者',
        date: '2018年5月18日',
        content: '哇，楼主有毅力啊。现在还没弃坑呢？'
      },
      {
        avatar: 'assets/imgs/mockdata/user2.jpg',
        alias: '封弊者',
        date: '2018年5月18日',
        content: '哇，楼主有毅力啊。现在还没弃坑呢？'

      }
    ]
  }

}
