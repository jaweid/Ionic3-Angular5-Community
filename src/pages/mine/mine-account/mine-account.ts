import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, AlertController} from 'ionic-angular';
import {WithdrawPage} from './withdraw/withdraw';
import {AccountRechargePage} from './account-recharge/account-recharge';
import {WithdrawRecordPage} from './withdraw-record/withdraw-record';
import {MyBankCardsComponent} from "./my-bank-cards/my-bank-cards";
import {ChooseBankCardPage} from "./choose-bank-card/choose-bank-card";
import {ScoreRulesComponent} from "./score-rules/score-rules";


@IonicPage()
@Component({
  selector: 'page-mine-account',
  templateUrl: 'mine-account.html',
})
export class MineAccountPage {
  public leftMoney = 0;

  constructor(public navCtrl: NavController,
              public alertCtrl: AlertController,
              public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.getMyLeftMoney();
  }

  getMyLeftMoney() {

  }

  withdrawPage() {
    this.navCtrl.push(ChooseBankCardPage);
  }

  myBankCardsComponent(){
    this.navCtrl.push(MyBankCardsComponent);
  }
  depositPage() {
    this.navCtrl.push(AccountRechargePage);
  }

  withdrawRecordPage() {
    this.navCtrl.push(WithdrawRecordPage);
  }
  scoreRulesPage(){
    this.navCtrl.push(ScoreRulesComponent);
  }
}
