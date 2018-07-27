import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, Events} from 'ionic-angular';
import {ForgetPasswordPage} from './forget-password/forget-password';
import {RegisterPage} from './register/register';
import {Storage} from '@ionic/storage';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  segmentModel: string = 'phone';
  public messageLoginModel: any = {
    api: 'user',
    act: 'act_login',
    type: 1
  };
  public passwordLoginModel: any = {
    api: 'user',
    act: 'act_login',
    type: 2
  };

  constructor(public navCtrl: NavController,
              public events: Events,
              public storage: Storage,
              public navParams: NavParams) {
  }

  getValiCode() {

  }

  valiDateLogin() {

  }

  passwordLogin() {

  }


  forgetPassword() {
    this.navCtrl.push(ForgetPasswordPage);
  }

  register() {
    this.navCtrl.push(RegisterPage);
  }

}
