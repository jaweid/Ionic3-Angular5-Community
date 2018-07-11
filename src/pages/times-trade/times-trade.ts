import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Time} from "../../core/resources/timeTrade/time";

/**
 * Generated class for the TimesTradePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-times-trade',
  templateUrl: 'times-trade.html',
})
export class TimesTradePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TimesTradePage');
  }
  timeList: Time[] = [
    {
      id: '1',
      header: 'assets/imgs/mockdata/user1.jpg',
      name: '手把手教你从零开始弹古筝手把手教你从零开始弹古筝',
      price: '200',
      viewNumber: '1234',
      lover: '23',
      phone: '1234',
      imgList: [
        'assets/imgs/mockdata/home_time_1.jpg',
        'assets/imgs/mockdata/home_time_2.jpg',
        'assets/imgs/mockdata/home_time_3.jpg'
      ]
    },
    {
      id: '1',
      header: 'assets/imgs/mockdata/user1.jpg',
      name: '手把手教你从零开始弹古筝',
      price: '200',
      viewNumber: '1234',
      lover: '23',
      phone: '1234',
      imgList: [
        'assets/imgs/mockdata/home_time_1.jpg',
        'assets/imgs/mockdata/home_time_2.jpg',
        'assets/imgs/mockdata/home_time_3.jpg'
      ]
    },
    {
      id: '1',
      header: 'assets/imgs/mockdata/user1.jpg',
      name: '手把手教你从零开始弹古筝',
      price: '200',
      viewNumber: '1234',
      lover: '23',
      phone: '1234',
      imgList: [
        'assets/imgs/mockdata/home_time_1.jpg',
        'assets/imgs/mockdata/home_time_2.jpg',
        'assets/imgs/mockdata/home_time_3.jpg'
      ]
    }
  ];

}
