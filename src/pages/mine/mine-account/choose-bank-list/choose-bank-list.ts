import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {Storage} from '@ionic/storage';

@Component({
  selector: 'page-choose-bank-list',
  templateUrl: 'choose-bank-list.html',
})
export class ChooseBankListPage {
  public bankList =
    [{bank_id: "1", bank_name: "北京银行", bank_img: "http://yany.gotoip4.com/images/bank/北京银行.png"},
    {bank_id: "1", bank_name: "北京银行", bank_img: "http://yany.gotoip4.com/images/bank/北京银行.png"},
    {bank_id: "2", bank_name: "工商银行", bank_img: "http://yany.gotoip4.com/images/bank/工商银行.png"},
    {bank_id: "3", bank_name: "光大银行", bank_img: "http://yany.gotoip4.com/images/bank/光大银行.png"},
    {bank_id: "4", bank_name: "广发银行", bank_img: "http://yany.gotoip4.com/images/bank/广发银行.png"},
    {bank_id: "5", bank_name: "建设银行", bank_img: "http://yany.gotoip4.com/images/bank/建设银行.png"},
    {bank_id: "6", bank_name: "交通银行", bank_img: "http://yany.gotoip4.com/images/bank/交通银行.png"},
    {bank_id: "7", bank_name: "民生银行", bank_img: "http://yany.gotoip4.com/images/bank/民生银行.png"},
    {bank_id: "8", bank_name: "农业银行", bank_img: "http://yany.gotoip4.com/images/bank/农业银行.png"},
  ];
  public choosedBank: any = {};

  constructor(public navCtrl: NavController,
              public storage: Storage,
              public navParams: NavParams) {
  }

  chooseBank(item) {
    let parent = this.navParams.get('parent');
    parent.choosedBank = item;
    this.storage.set('choosedBank', item);
    this.navCtrl.pop();
  }

  ionViewDidLoad() {
    this.storage.get('choosedBank').then((b) => {
      if (b) {
        this.choosedBank = b;
      }
    });

  }

  getNewestBankList(re) {

  }
}
