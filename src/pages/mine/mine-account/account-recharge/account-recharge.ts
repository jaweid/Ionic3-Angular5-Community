import {Component} from '@angular/core';
import {NavController, NavParams, AlertController} from 'ionic-angular';
import {PAY_TYPE_LIST} from "../../../../shared/consts/const";

declare let jQuery: any;


@Component({
  selector: 'page-account-recharge',
  templateUrl: 'account-recharge.html',
})
export class AccountRechargePage {
  public payList = [];
  public rechargeModel: any = {
    money: 6
  };
  public choosedPayType: number = 0;

  public chooseData = [6, 30, 98, 198,328,648];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public alert: AlertController) {
    this.payList = PAY_TYPE_LIST;

  }

  chooseMoney(money) {
    this.rechargeModel.money = money;
  }



  doPrompt() {
    let prompt = this.alert.create({
      title: '自定义金额',
      inputs: [
        {
          name: 'title',
          placeholder: ''
        },
      ],
      buttons: [
        {
          text: '取消',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: '确认',
          handler: data => {
            this.rechargeModel.money = 10;
          }
        }
      ],
      cssClass: 'input-money-alert'
    });
    prompt.present();
  }

  pay() {
    switch (this.choosedPayType) {

    }
  }

  payFail() {
    this.alert.create({
      title: '支付失败',
      buttons: [
        {
          text: '确认',
          handler: () => {
            this.navCtrl.setRoot('TabsPage', {tabIndex: 0})
          }
        }
      ]
    }).present();
  }

  payDone() {
    this.alert.create({
      title: '支付成功',
      buttons: [
        {
          text: '确认',
          handler: () => {
            this.navCtrl.setRoot('TabsPage', {tabIndex: 3})
          }
        }
      ]
    }).present();
  }

}
