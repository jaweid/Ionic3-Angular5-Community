import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';

/**
 * Generated class for the SortModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sort-modal',
  templateUrl: 'sort-modal.html',
})
export class SortModalPage {

  public filterList = [];

  public currentItem;

  constructor(public navCtrl: NavController,
              public viewCtrl: ViewController,
              public navParams: NavParams) {
    this.filterList = this.navParams.get('list');
    let current = this.navParams.get('currentFilter');
    current ? this.currentItem = current : this.currentItem = this.filterList[0].value;
  }


  choose(item) {
    this.viewCtrl.dismiss(
      {filterData: item}
    )
  }

}
