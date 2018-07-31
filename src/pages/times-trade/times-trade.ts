import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, PopoverController} from 'ionic-angular';
import {Time} from "../../shared/resources/timeTrade/time";
import {TimeDetailComponent} from "./time-detail/time-detail";
import {TimePayComponent} from "./time-detail/time-pay/time-pay";
import {Distance, Reading, UpdateTime} from "../../shared/consts/const";


@IonicPage()
@Component({
  selector: 'page-times-trade',
  templateUrl: 'times-trade.html',
})
export class TimesTradePage {

  constructor(public navCtrl: NavController,
              public popoverCtrl: PopoverController,
              public navParams: NavParams) {
  }

  timeList: Time[] = [
    {
      id: '1',
      header: 'assets/imgs/mockdata/user1.jpg',
      name: '手把手教你从零开始弹古筝手把手教你从零开始弹古筝',
      price: '200',
      viewNumber: '1234',
      lover: '23',
      phone: '1234',
      imgList: [
        'assets/imgs/mockdata/home_time_1.jpg',
        'assets/imgs/mockdata/home_time_2.jpg',
        'assets/imgs/mockdata/home_time_3.jpg'
      ]
    },
    {
      id: '1',
      header: 'assets/imgs/mockdata/user1.jpg',
      name: '手把手教你从零开始弹古筝',
      price: '200',
      viewNumber: '1234',
      lover: '23',
      phone: '1234',
      imgList: [
        'assets/imgs/mockdata/home_time_1.jpg',
        'assets/imgs/mockdata/home_time_2.jpg',
        'assets/imgs/mockdata/home_time_3.jpg'
      ]
    },
    {
      id: '1',
      header: 'assets/imgs/mockdata/user1.jpg',
      name: '手把手教你从零开始弹古筝',
      price: '200',
      viewNumber: '1234',
      lover: '23',
      phone: '1234',
      imgList: [
        'assets/imgs/mockdata/home_time_1.jpg',
        'assets/imgs/mockdata/home_time_2.jpg',
        'assets/imgs/mockdata/home_time_3.jpg'
      ]
    }
  ];

  toTimesDetailPage(item) {
    this.navCtrl.push(TimeDetailComponent, {detail: item})
  }


  buyNow() {
    this.navCtrl.push(TimePayComponent)
  }

  public showFilterModal;

  public filterModel: any = {};

  presentPopover(value) {
    if (this.showFilterModal) {
      this.showFilterModal.dismiss();
    } else {
      let data = [];
      switch (value) {
        case 'distance':
          data = Distance;
          break;
        case 'reading':
          data = Reading;
          break;
        case 'update':
          data = UpdateTime;
          break;
      }
      this.showFilterModal = this.popoverCtrl.create('SortModalPage', {list: data,currentFilter:this.filterModel[value]}, {cssClass: 'sort-inset-modal'});
      this.showFilterModal.present();
      this.showFilterModal.onWillDismiss((data) => {
        if (data) {
          this.filterModel[value] = data.filterData.value;
        }
        this.showFilterModal = null;
      })
    }
  }


}
