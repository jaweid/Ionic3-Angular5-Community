import {Component} from '@angular/core';
import {NavController, NavParams, ModalController, AlertController} from 'ionic-angular';
import {ChooseBankCardPage} from '../choose-bank-card/choose-bank-card';
import {Storage} from '@ionic/storage';
import {WithdrawCompletedComponent} from "../withdraw-completed/withdraw-completed";

@Component({
  selector: 'page-withdraw',
  templateUrl: 'withdraw.html',
})
export class WithdrawPage {
  withDrawModel:any={

  };
  public leftMoney = 200;

  public currentBand: any = {};

  constructor(public navCtrl: NavController,
              public modalCtrl: ModalController,
              public alertCtrl: AlertController,
              public storage: Storage,
              public navParams: NavParams) {
    this.currentBand=this.navParams.get('bank');
  }

  ionViewDidLoad() {

  }


  chooseBankCard() {
   this.navCtrl.pop();
  }


  confirmWithdraw() {
    this.navCtrl.push(WithdrawCompletedComponent)
  }

}
