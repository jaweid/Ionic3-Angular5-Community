import {Component} from '@angular/core';

/**
 * Generated class for the GoodsDetailComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'goods-detail',
  templateUrl: 'goods-detail.html'
})
export class GoodsDetailComponent {

  goodsDetail = {
    imgs: [
      'assets/imgs/mockdata/cat.jpg',
      'assets/imgs/mockdata/cat.jpg',
      'assets/imgs/mockdata/cat.jpg',
      'assets/imgs/mockdata/cat.jpg',
      'assets/imgs/mockdata/cat.jpg'
    ],
    title: '九成新起司猫台式小风扇，超可爱！超便宜！',
    date: '2018/4/15',
    view: '1222',
    commets: '111',
    price: '16',
    type: '电器/风扇',
    newOld: '8成新',
    description: '去年买夏天的小风扇，没怎么用运行很好，就是放了半年有点脏，就要搬家带不走了，便宜卖掉了。去年买夏天的小风扇，没怎么用运行很好，就是放了半年有点脏，就要搬家带不走了，便宜卖掉了。去年买夏天的小风扇，没怎么用运行很好，就是放了半年有点脏，就要搬家带不走了，便宜卖掉了。',
    contact: '王小姐',
    contactNumber: '',
  };

  constructor() {
  }

}
