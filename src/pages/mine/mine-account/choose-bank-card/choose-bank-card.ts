import {Component} from '@angular/core';
import {NavController, NavParams, ViewController, ModalController, AlertController} from 'ionic-angular';

import {Storage} from '@ionic/storage';
import {AddBankCardPage} from '../add-bank-card/add-bank-card';
import {WithdrawPage} from "../withdraw/withdraw";

@Component({
  selector: 'page-choose-bank-card',
  templateUrl: 'choose-bank-card.html',
})
export class ChooseBankCardPage {

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
  public choosedMyBankCard: any = {};

  constructor(public navCtrl: NavController,
              public modalCtrl: ModalController,
              public storage: Storage,
              public viewCtrl: ViewController,
              public alertCtrl: AlertController,
              public navParams: NavParams) {
  }

  ionViewWillEnter() {
    this.storage.get('choosedMyBankCard').then((b) => {
      if (b) {
        this.choosedMyBankCard = b;
      }
    });
    this.getMyCardList();
  }

  dismiss() {

    this.viewCtrl.dismiss();
  }

  getMyCardList() {

  }


  choose(item) {
    this.storage.set('choosedMyBankCard', item);
    this.choosedMyBankCard = item;
  }

  confirm() {
   this.navCtrl.push(WithdrawPage,{bank:this.choosedMyBankCard});
  }

  addBankCard() {
    this.navCtrl.push(AddBankCardPage);
  }


}
