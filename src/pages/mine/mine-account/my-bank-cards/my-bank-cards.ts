import {Component} from '@angular/core';
import {AddBankCardPage} from "../add-bank-card/add-bank-card";
import {AlertController, NavController} from "ionic-angular";

/**
 * Generated class for the MyBankCardsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'my-bank-cards',
  templateUrl: 'my-bank-cards.html'
})
export class MyBankCardsComponent {

  public bankCardList = [
    {
      user_bank_id: "6",
      bank_name: "广发银行",
      bank_img: "http://yany.gotoip4.com/images/bank/广发银行.png",
      bank_info: "储蓄卡",
      number: '****     ****     ****     5623',
      bgColor: '#319C8B'
    },
    {
      bank_img: "http://yany.gotoip4.com/images/bank/北京银行.png",
      bank_info: "储蓄卡",
      bank_name: "北京银行",
      user_bank_id: "5",
      number: '****     ****     ****     5623',
      bgColor: '#F9798E'
    }
  ];

  constructor(
    public navCtrl: NavController,
    public alertCtrl: AlertController,
  ) {
  }

  addBankCard() {
    this.navCtrl.push(AddBankCardPage);
  }

  presentConfirm(item) {
    let alert = this.alertCtrl.create({
      title: '提示信息',
      message: '您确认要删除这条银行卡信息吗?',
      buttons: [
        {
          text: '取消',
          role: 'cancel',
          handler: () => {
          }
        },
        {
          text: '确认',
          handler: () => {
            this.deleteBankCard(item);
          }
        }
      ]
    });
    alert.present();
  }

  deleteBankCard(item) {

  }

  getNewestMyBankList(refresher) {

  }
}
