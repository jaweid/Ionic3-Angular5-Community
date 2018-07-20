import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';

@Component({
  selector: 'page-withdraw-record',
  templateUrl: 'withdraw-record.html',
})
export class WithdrawRecordPage {
  records = [
    {
      date: "2018-06",
      list: [{
        change_desc: "订单支付",
        change_time: "1528967469",
        change_type: "99",
        changetime: "2018-06-14",
        frozen_money: "0.00",
        log_id: "217",
        pay_points: "0",
        rank_points: "0",
        user_id: "88",
        user_money: "-700.00",
        yue: "10100.00"
      }]
    }
  ];

  public getWithdrawRecordModel: any = {};

  constructor(public navCtrl: NavController,
              public navParams: NavParams) {
  }

  ionViewDidLoad() {

  }

  getNewestRecordsLists(refresher) {

  }

  public haveLoadAllData: boolean = false;

  getMoreRecordsLists(infiniteScroll) {

  }
}
