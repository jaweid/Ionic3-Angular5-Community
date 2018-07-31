import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

/**
 * Generated class for the TimeOrderCommentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-time-order-comment',
  templateUrl: 'time-order-comment.html',
})
export class TimeOrderCommentPage {
  fileObjList: string[] = [];

  timeDetail: any = {};

  public heartOptions = [
    {
      isChoose: false
    },
    {
      isChoose: false
    },
    {
      isChoose: false
    },
    {
      isChoose: false
    },
    {
      isChoose: false
    }
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.timeDetail = this.navParams.get('detail');
  }

  toggleHeart(index) {
    this.heartOptions[index].isChoose = !this.heartOptions[index].isChoose
  }

}
