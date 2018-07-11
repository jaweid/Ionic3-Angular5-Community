import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {PeopleSearch} from "../../core/resources/people-search/people-search";

/**
 * Generated class for the ThingSearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-thing-search',
  templateUrl: 'thing-search.html',
})
export class ThingSearchPage {
  peopleSearchList: PeopleSearch[] = [
    {
      id: '1',
      avatar: 'assets/imgs/mockdata/house.jpg',
      title: '专业司仪30年',
      subTitle: '专业婚庆司仪，因为专注所以专业，欢迎各位新人来电咨询。',
      date: '2018/4/15',
      viewNumber: '1234',
      commentsNumber: '988'
    },
    {
      id: '1',
      avatar: 'assets/imgs/mockdata/house.jpg',
      title: '专业司仪30年，婚礼庆典欢迎来询',
      subTitle: '专业婚庆司仪，因为专注所以专业，欢迎各位新人来电咨询。',
      date: '2018/4/15',
      viewNumber: '1234',
      commentsNumber: '988'
    },
    {
      id: '1',
      avatar: 'assets/imgs/mockdata/house.jpg',
      title: '专业司仪30年，婚礼庆典欢迎来询.专业司仪30年，婚礼庆典欢迎来询',
      subTitle: '专业司仪30年，婚礼庆典欢迎来询.专业婚庆司仪，因为专注所以专业，欢迎各位新人来电咨询。',
      date: '2018/4/15',
      viewNumber: '1234',
      commentsNumber: '988'
    }];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ThingSearchPage');
  }

}
