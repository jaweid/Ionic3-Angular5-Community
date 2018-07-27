import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  public agree: boolean = false;
  public registerModel: any = {
    api: 'register',
    act: 'register'
  };
  public confirmPsd: string = '';

  constructor(public navCtrl: NavController,
              public navParams: NavParams) {
  }


  login() {
    this.navCtrl.push('LoginPage');
  }

  getValidateCode() {


  }


  register() {

  }
}
