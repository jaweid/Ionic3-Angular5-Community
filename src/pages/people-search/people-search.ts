import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, PopoverController} from 'ionic-angular';
import {PeopleSearch} from "../../shared/resources/people-search/people-search";
import {PeopleDetailComponent} from "../../shared/components/people-detail/people-detail";
import {SortModalPage} from "../../shared/common-pages/sort-modal/sort-modal";
import {PostSortForSearchPerson, SortOptions} from "../../shared/consts/const";


@IonicPage()
@Component({
  selector: 'page-people-search',
  templateUrl: 'people-search.html',
})
export class PeopleSearchPage {
  peopleSearchList: PeopleSearch[] = [
    {
      id: '1',
      avatar: 'assets/imgs/mockdata/looking-for-person.jpg',
      title: '5年战友，今在何方',
      subTitle: '寻找北方军区一连三排，5班班长章三。寻找北方军区一连三排，5班班长章三。寻找北方军区一连三排，5班班长章三',
      date: '2018/4/15',
      viewNumber: '1234',
      commentsNumber: '988'
    },
    {
      id: '1',
      avatar: 'assets/imgs/mockdata/looking-for-person.jpg',
      title: '5年战友，今在何方',
      subTitle: '寻找北方军区一连三排，5班班长章三。',
      date: '2018/4/15',
      viewNumber: '1234',
      commentsNumber: '988'
    },
    {
      id: '1',
      avatar: 'assets/imgs/mockdata/looking-for-person.jpg',
      title: '5年战友，今在何方',
      subTitle: '寻找北方军区一连三排，5班班长章三。',
      date: '2018/4/15',
      viewNumber: '1234',
      commentsNumber: '988'
    }];

  constructor(public navCtrl: NavController,
              public popoverCtrl: PopoverController,
              public navParams: NavParams) {
  }

  ionViewDidLoad() {
  }

  toPeopleDetailPage(item) {
    this.navCtrl.push(PeopleDetailComponent, {detail: item})
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
      this.showFilterModal.onWillDismiss((data) => {
        if (data) {
          this.filterModel[value] = data.filterData.value;
        }
        this.showFilterModal = null;
      })
    }
  }

}
