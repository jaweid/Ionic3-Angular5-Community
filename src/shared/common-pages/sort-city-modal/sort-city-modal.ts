import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';

/**
 * Generated class for the SortCityModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sort-city-modal',
  templateUrl: 'sort-city-modal.html',
})
export class SortCityModalPage {

  public filterList = [
    {
      title: 'A',
      cities: [
        {text: '安庆市',value:'1'},
        {text: '鞍山市',value:'2'},
        {text: '安顺市',value:'3'},
        {text: '安图市',value:'4'}
      ]
    },
    {
      title: 'B',
      cities: [
        {text: '安庆市',value:'5'},
        {text: '鞍山市',value:'6'},
        {text: '安顺市',value:'7'},
        {text: '安图市',value:'8'}
      ]
    }
  ];
  public currentItem;

  constructor(public navCtrl: NavController,
              public viewCtrl: ViewController,
              public navParams: NavParams) {
    let current = this.navParams.get('currentFilter');
    current ? this.currentItem = current : this.currentItem = this.filterList[0].cities[0].value;
  }


  choose(item) {
    this.viewCtrl.dismiss(
      {filterData: item}
    )
  }
}
