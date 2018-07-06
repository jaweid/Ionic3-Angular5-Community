import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {} from '../../assets/mockData/mockData.json'
import {HelperService} from "../../shared/services/helper.service";
import {HomeNavList} from "../../core/consts/config/const";
import {Time} from "../../core/resources/timeTrade/time";
import {PeopleSearch} from "../../core/resources/looking-for-person/people-search";

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  adLists = [
    'assets/imgs/home/ad.png',
    'assets/imgs/home/ad.png',
    'assets/imgs/home/ad.png'
  ];

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

  peopleSearchList: PeopleSearch[] = [
    {
      id: '1',
      avatar: 'assets/imgs/mockdata/looking-for-person.jpg',
      title: '5年战友，今在何方',
      subTitle: '寻找北方军区一连三排，5班班长章三。寻找北方军区一连三排，5班班长章三。寻找北方军区一连三排，5班班长章三',
      date: '2018/4/15',
      viewNumber: '1234',
      commentsNumber: '988'
    },
    {
      id: '1',
      avatar: 'assets/imgs/mockdata/looking-for-person.jpg',
      title: '5年战友，今在何方',
      subTitle: '寻找北方军区一连三排，5班班长章三。',
      date: '2018/4/15',
      viewNumber: '1234',
      commentsNumber: '988'
    },
    {
      id: '1',
      avatar: 'assets/imgs/mockdata/looking-for-person.jpg',
      title: '5年战友，今在何方',
      subTitle: '寻找北方军区一连三排，5班班长章三。',
      date: '2018/4/15',
      viewNumber: '1234',
      commentsNumber: '988'
    }];
  navList = HomeNavList;

  constructor(public navCtrl: NavController,
              private helper: HelperService,
              public navParams: NavParams) {
  }

  ionViewDidLoad() {
    // this.helper.initSwiper();
  }

  nav(value){
    this.navCtrl.push(value);
  }

}
