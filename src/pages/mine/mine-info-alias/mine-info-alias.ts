import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';

/**
 * Generated class for the MineInfoAliasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-mine-info-alias',
  templateUrl: 'mine-info-alias.html',
})
export class MineInfoAliasPage {
  public userName: string = '';

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.userName = this.navParams.get("username");
  }


}
