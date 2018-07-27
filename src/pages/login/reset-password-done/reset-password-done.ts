import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';

/**
 * Generated class for the ResetPasswordDonePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-reset-password-done',
  templateUrl: 'reset-password-done.html',
})
export class ResetPasswordDonePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  goLogin() {
    this.navCtrl.push('LoginPage');
  }
}
