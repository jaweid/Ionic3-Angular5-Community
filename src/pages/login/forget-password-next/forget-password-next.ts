import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {ResetPasswordDonePage} from '../reset-password-done/reset-password-done';

/**
 * Generated class for the ForgetPasswordNextPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-forget-password-next',
  templateUrl: 'forget-password-next.html',
})
export class ForgetPasswordNextPage {
  public resetPsdModel: any = {
    api: 'find_password',
    act: 'reset_password',
    mobile_phone: ''
  };
  public confirmPsd = '';

  constructor(public navCtrl: NavController,
              public navParams: NavParams) {
    this.resetPsdModel.mobile_phone = this.navParams.get("mobile_phone");
  }


  done() {
    // if (this.confirmPsd != this.resetPsdModel.password) {
    //   this.native.showToast("确认密码和密码不一致");
    //   return;
    // }
    this.navCtrl.push(ResetPasswordDonePage)

  }
}
