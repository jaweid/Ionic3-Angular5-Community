import {Component} from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
import {MineInfoAliasPage} from "./mine-info-alias/mine-info-alias";
import {RealNameCertifyComponent} from "./real-name-certify/real-name-certify";
import {MyCollectionComponent} from "./my-collection/my-collection";
import {PostSecondaryTimeComponent} from "../post/post-secondary-time/post-secondary-time";
import {SignInRecordsComponent} from "./sign-in-records/sign-in-records";
import {DefaultAvatar} from "../../shared/consts/const";
import {MyPostComponent} from "./my-post/my-post";


@IonicPage()
@Component({
  selector: 'page-mine',
  templateUrl: 'mine.html',
})
export class MinePage {

  placeholderPicture = DefaultAvatar;

  user: any = {
    img: 'assets/imgs/mockdata/user1.jpg',
    name: '封弊者',
    score: '6000'
  };

  constructor(public navCtrl: NavController,
              public alertCtrl: AlertController,
              public navParams: NavParams) {
  }

  changeAlias() {
    this.navCtrl.push(MineInfoAliasPage)
  }

  realNameCertification() {
    this.navCtrl.push(RealNameCertifyComponent)

  }

  signInRecord() {
    this.navCtrl.push(SignInRecordsComponent);
  }



  myCollections() {
    this.navCtrl.push(MyCollectionComponent);
  }

  ionViewDidLoad() {
  }

  newPage(value) {
    this.navCtrl.push(value)
  }

  myPostPage(){
    this.navCtrl.push(MyPostComponent);
  }
  confirmLogOut() {
    this.alertCtrl.create({
      message: '确定退出当前账号',
      buttons: [
        {
          text: '取消'
        },
        {
          text: '确认',
          handler: () => {
            // this.logOut();
            this.user = {};
          }
        }
      ]
    }).present();
  }
}
