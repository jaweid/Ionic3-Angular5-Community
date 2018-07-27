import {Component} from '@angular/core';
import {NavController, NavParams} from "ionic-angular";
import {SettingPasswordComponent} from "../setting-password/setting-password";

/**
 * Generated class for the PhoneCertificateComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'phone-certificate',
  templateUrl: 'phone-certificate.html'
})
export class PhoneCertificateComponent {

  text: string;

  constructor(
    public navCtrl: NavController, public navParams: NavParams
  ) {
    console.log('Hello PhoneCertificateComponent Component');
    this.text = 'Hello World';
  }

  confirm() {
    this.navCtrl.push(SettingPasswordComponent);
  }
}
