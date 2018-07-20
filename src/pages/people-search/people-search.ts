import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {PeopleSearch} from "../../shared/resources/people-search/people-search";

/**
 * Generated class for the PeopleSearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-people-search',
  templateUrl: 'people-search.html',
})
export class PeopleSearchPage {
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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PeopleSearchPage');
  }

}
