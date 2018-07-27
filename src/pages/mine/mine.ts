import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {MineInfoAliasPage} from "./mine-info-alias/mine-info-alias";
import {RealNameCertifyComponent} from "./real-name-certify/real-name-certify";
import {MyCollectionComponent} from "./my-collection/my-collection";


@IonicPage()
@Component({
  selector: 'page-mine',
  templateUrl: 'mine.html',
})
export class MinePage {
  user = {
    img: 'assets/imgs/mockdata/user1.jpg',
    // name: '封弊者',
    score: '6000'
  };

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  changeAlias() {
    this.navCtrl.push(MineInfoAliasPage)
  }

  realNameCertification() {
    this.navCtrl.push(RealNameCertifyComponent)

  }

  myCollections() {
    this.navCtrl.push(MyCollectionComponent);
  }

  ionViewDidLoad() {
  }

  newPage(value) {
    this.navCtrl.push(value)
  }
}
