import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {PhoneCertificateComponent} from "./phone-certificate/phone-certificate";

/**
 * Generated class for the MySettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-my-settings',
  templateUrl: 'my-settings.html',
})
export class MySettingsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
  }

  phoneCertificate(){
    this.navCtrl.push(PhoneCertificateComponent);
  }


}
