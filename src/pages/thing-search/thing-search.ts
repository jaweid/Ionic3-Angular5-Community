import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, PopoverController} from 'ionic-angular';
import {PeopleSearch} from "../../shared/resources/people-search/people-search";
import {PeopleDetailComponent} from "../../shared/components/people-detail/people-detail";
import {PostSortForSearchPerson, SortOptions} from "../../shared/consts/const";

/**
 * Generated class for the ThingSearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-thing-search',
  templateUrl: 'thing-search.html',
})
export class ThingSearchPage {
  peopleSearchList: PeopleSearch[] = [
    {
      id: '1',
      avatar: 'assets/imgs/mockdata/house.jpg',
      title: '专业司仪30年',
      subTitle: '专业婚庆司仪，因为专注所以专业，欢迎各位新人来电咨询。',
      date: '2018/4/15',
      viewNumber: '1234',
      commentsNumber: '988'
    },
    {
      id: '1',
      avatar: 'assets/imgs/mockdata/house.jpg',
      title: '专业司仪30年，婚礼庆典欢迎来询',
      subTitle: '专业婚庆司仪，因为专注所以专业，欢迎各位新人来电咨询。',
      date: '2018/4/15',
      viewNumber: '1234',
      commentsNumber: '988'
    },
    {
      id: '1',
      avatar: 'assets/imgs/mockdata/house.jpg',
      title: '专业司仪30年，婚礼庆典欢迎来询.专业司仪30年，婚礼庆典欢迎来询',
      subTitle: '专业司仪30年，婚礼庆典欢迎来询.专业婚庆司仪，因为专注所以专业，欢迎各位新人来电咨询。',
      date: '2018/4/15',
      viewNumber: '1234',
      commentsNumber: '988'
    }];

  constructor(public navCtrl: NavController,
              public popoverCtrl: PopoverController,
              public navParams: NavParams) {
  }


  toThingDetailPage(item) {
    this.navCtrl.push(PeopleDetailComponent,{detail:item})
  }

  public showFilterModal;
  public filterModel: any = {};

  presentPopover(value) {
    if (this.showFilterModal) {
      this.showFilterModal.dismiss();
    } else {
      let data = [];
      value === 'type' ? data = PostSortForSearchPerson.options : data = SortOptions;
      this.showFilterModal = this.popoverCtrl.create('SortModalPage', {list: data,currentFilter:this.filterModel[value]}, {cssClass: 'sort-inset-modal'});
      this.showFilterModal.present();
      this.showFilterModal.onDidDismiss((data) => {
        if (data) {
          this.filterModel[value] = data.filterData.value;
        }
        this.showFilterModal = null;
      })
    }
  }
}
