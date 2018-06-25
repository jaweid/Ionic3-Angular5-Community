import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {Storage} from '@ionic/storage';
import {GlobalData} from "../../shared/services/global-data.service";

/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
  tab1Root = 'HomePage';
  tab2Root = 'SortPage';
  tab3Root = 'PostPage';
  tab4Root = 'OrderPage';
  tab5Root = 'MinePage';
  mySelectedIndex: number;

  constructor(public navCtrl: NavController,
              public storage: Storage,
              public globalData: GlobalData,
              public navParams: NavParams) {


    this.mySelectedIndex = navParams.data.tabIndex || 0;
    this.storage.get('userLoginData').then(
      data => {
        if (data) {
          this.globalData.userData = data;
        }
      }
    );
  }

}
