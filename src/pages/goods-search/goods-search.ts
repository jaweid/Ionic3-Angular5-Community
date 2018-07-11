import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {GoodsSearch} from "../../core/resources/goods-search/goods-search";

/**
 * Generated class for the GoodsSearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-goods-search',
  templateUrl: 'goods-search.html',
})
export class GoodsSearchPage {
  goodsSearchList: GoodsSearch[] = [
    {
      id: '1',
      img: 'assets/imgs/mockdata/goods-search.jpg',
      name: 'LV正品手提包',
      address: '红旗南路',
      phone: '111111',
      price: '123',
      date: '2018/4/15',
      viewNumber: '1234',
      commentsNumber: '988'
    },
    {
      id: '1',
      img: 'assets/imgs/mockdata/goods-search.jpg',
      name: 'LV正品手提包',
      address: '红旗南路',
      phone: '111111',
      price: '123',
      date: '2018/4/15',
      viewNumber: '1234',
      commentsNumber: '988'
    },
    {
      id: '1',
      img: 'assets/imgs/mockdata/goods-search.jpg',
      name: 'LV正品手提包,LV正品手提包,LV正品手提包',
      address: '红旗南路',
      phone: '111111',
      price: '123',
      date: '2018/4/15',
      viewNumber: '1234',
      commentsNumber: '988'
    }
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
  }

}
