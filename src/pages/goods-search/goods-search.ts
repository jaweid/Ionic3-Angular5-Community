import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, PopoverController} from 'ionic-angular';
import {GoodsSearch} from "../../shared/resources/goods-search/goods-search";
import {GoodsDetailComponent} from "./goods-detail/goods-detail";
import {PostSortForSearchPerson, SortOptions} from "../../shared/consts/const";
import {SortCityModalPage} from "../../shared/common-pages/sort-city-modal/sort-city-modal";

/**
 * Generated class for the GoodsSearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-goods-search',
  templateUrl: 'goods-search.html',
})
export class GoodsSearchPage {
  goodsSearchList: GoodsSearch[] = [
    {
      id: '1',
      img: 'assets/imgs/mockdata/goods-search.jpg',
      name: 'LV正品手提包',
      address: '红旗南路',
      phone: '111111',
      price: '123',
      date: '2018/4/15',
      viewNumber: '1234',
      commentsNumber: '988'
    },
    {
      id: '1',
      img: 'assets/imgs/mockdata/goods-search.jpg',
      name: 'LV正品手提包',
      address: '红旗南路',
      phone: '111111',
      price: '123',
      date: '2018/4/15',
      viewNumber: '1234',
      commentsNumber: '988'
    },
    {
      id: '1',
      img: 'assets/imgs/mockdata/goods-search.jpg',
      name: 'LV正品手提包,LV正品手提包,LV正品手提包',
      address: '红旗南路',
      phone: '111111',
      price: '123',
      date: '2018/4/15',
      viewNumber: '1234',
      commentsNumber: '988'
    }
  ];

  type = 'lose';
  priceFilter = 'down';

  constructor(public navCtrl: NavController,
              public popoverCtrl: PopoverController,
              public navParams: NavParams) {
  }

  ionViewDidLoad() {
  }

  viewGoodsDetailPage(value) {
    this.navCtrl.push(GoodsDetailComponent);
  }

  public showFilterModal;
  public currentTitle='lose';
  public filterModel: any = {};
  toggleTitle(){
    this.currentTitle==='lose'?this.currentTitle='old':this.currentTitle='lose';
  }
  presentPopover(value) {
    if (this.showFilterModal) {
      this.showFilterModal.dismiss();
    } else {
      let data = [];
      let page = 'SortModalPage';

      switch (value) {
        case 'type':
          data = PostSortForSearchPerson.options;
          break;
        case 'sort':
          data = SortOptions;
          break;
        case 'city':
          page = 'SortCityModalPage';
          break;
      }
      this.showFilterModal = this.popoverCtrl.create(page, {
        list: data,
        currentFilter: this.filterModel[value]
      }, {cssClass: 'sort-inset-modal'});
      this.showFilterModal.present();
      this.showFilterModal.onWillDismiss((data) => {
        if (data) {
          this.filterModel[value] = data.filterData.value;
        }
        this.showFilterModal = null;
      })
    }
  }

  togglePrice() {
    this.priceFilter === 'down' ? this.priceFilter = 'up' : this.priceFilter = 'down';
  }

}
