import {Component} from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';
import {NativeService} from "../../services/native.service";

declare let $: any;

/**
 * Generated class for the InputPayPasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-input-pay-password',
  templateUrl: 'input-pay-password.html',
})
export class InputPayPasswordPage {
  psd = '';
  orderId = '';

  constructor(public navCtrl: NavController,
              private native: NativeService,
              private alert: AlertController,
              private viewCtrl: ViewController,
              public navParams: NavParams) {
    this.orderId = this.navParams.get('orderId');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }


  ionViewDidLoad() {
    $('.setpw_input').bind('input propertychange', () => {
      if ($('.setpw_input').val().length > 6) {
        $('.setpw_input').val($('.setpw_input').val().slice(0, 6));
      } else {
        $('.setpw_num_dian').hide();
        for (var i = 0; i < $('.setpw_input').val().length; i++) {
          $('.setpw_num_dian').eq(i).show()
        }
      }
      this.psd = $('.setpw_input').val();
      if (this.psd.length === 6) {
        this.done();
      }
    });
  }


  done() {
    console.log(this.psd);
    if (this.psd.length < 6) {
      this.native.showToast("密码长度不符");
      return;
    } else {

    }
  }


  payFail(message) {
    this.alert.create({
      title: '支付失败',
      message: message,
      buttons: [
        {
          text: '确认',
          handler: () => {
            this.navCtrl.setRoot('TabsPage', {tabIndex: 0})
          }
        }
      ]
    }).present();
  }

  payDone() {
    this.alert.create({
      title: '支付成功',
      buttons: [
        {
          text: '确认',
          handler: () => {
            this.navCtrl.setRoot('TabsPage', {tabIndex: 3})
          }
        }
      ]
    }).present();
  }


}
