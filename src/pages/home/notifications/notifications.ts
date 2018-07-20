import {Component} from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';
import {Notifications} from "../../../shared/resources/notifications/notifications";

@Component({
  selector: 'page-notifications',
  templateUrl: 'notifications.html',
})
export class NotificationsPage {
  public notificationsList: Notifications[] = [
    {
      id: '1',
      title: '亲，你有一技之长吗？想要让你的时间变成金钱吗?时间买卖了解一下？',
      date: '2018/4/10'
    },
    {
      id: '1',
      title: '尊敬的用户，你关注的“隔壁家大姐姐”发布了一条新的寻人信息，快去看看吧。尊敬的用户，你关注的“隔壁家大姐姐”发布了一条新的寻人信息，快去看看吧。尊敬的用户，你关注的“隔壁家大姐姐”发布了一条新的寻人信息，快去看看吧。',
      date: '2018/4/10'
    },
    {
      id: '1',
      title: '亲，你有一技之长吗？想要让你的时间变成金钱吗?时间买卖了解一下？',
      date: '2018/4/10'
    }
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
  }

}
