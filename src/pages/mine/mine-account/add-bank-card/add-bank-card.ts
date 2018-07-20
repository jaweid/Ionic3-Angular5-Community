import { Component } from '@angular/core';
import {NavController, NavParams, ViewController} from 'ionic-angular';
import {ChooseBankListPage} from '../choose-bank-list/choose-bank-list';
import {Storage} from '@ionic/storage';

/**
 * Generated class for the AddBankCardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@Component({
  selector: 'page-add-bank-card',
  templateUrl: 'add-bank-card.html',
})
export class AddBankCardPage {

  public bankList=[];
  addBankCardModel:any={};
  public choosedBank:any={};
  constructor(public navCtrl: NavController,
              public viewCtrl:ViewController,
              public storage:Storage,
              public navParams: NavParams) {
  }

  ionViewDidLoad(){
   this.storage.remove('choosedBank');
  }


  dismiss(){
    this.viewCtrl.dismiss();
  }


  addBankCard(){

  }


  chooseBankList(){
    this.navCtrl.push(ChooseBankListPage,{parent:this});
  }

}
