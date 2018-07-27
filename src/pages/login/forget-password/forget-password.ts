import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {ForgetPasswordNextPage} from '../forget-password-next/forget-password-next';


/**
 * Generated class for the ForgetPasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-forget-password',
  templateUrl: 'forget-password.html',
})
export class ForgetPasswordPage {
  public validateModel: any = {
    api: 'find_password',
    act: 'validate'
  };

  constructor(public navCtrl: NavController,
              public navParams: NavParams) {
  }

  getValiCode() {

  }

  validateCode() {
    this.navCtrl.push(ForgetPasswordNextPage)
  }

}
