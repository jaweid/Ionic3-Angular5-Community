import {Component} from '@angular/core';
import {GoodsDetailComponent} from "../../goods-search/goods-detail/goods-detail";
import {PeopleDetailComponent} from "../../../shared/components/people-detail/people-detail";
import {TimeDetailComponent} from "../../times-trade/time-detail/time-detail";
import {NavController} from "ionic-angular";

/**
 * Generated class for the MyPostComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'my-post',
  templateUrl: 'my-post.html'
})
export class MyPostComponent {
  collectionList: any = [];

  segmentModel = 'people';

  getCollectionsLists(value) {
    switch (value) {
      case 'people':
        this.collectionList = [
          {
            id: '1',
            avatar: 'assets/imgs/mockdata/looking-for-person.jpg',
            title: '5年战友，今在何方',
            subTitle: '寻找北方军区一连三排，5班班长章三。寻找北方军区一连三排，5班班长章三。寻找北方军区一连三排，5班班长章三',
            date: '2018/4/15',
            viewNumber: '1234',
            commentsNumber: '988',
          },
          {
            id: '1',
            avatar: 'assets/imgs/mockdata/looking-for-person.jpg',
            title: '5年战友，今在何方',
            subTitle: '寻找北方军区一连三排，5班班长章三。',
            date: '2018/4/15',
            viewNumber: '1234',
            commentsNumber: '988',
          },
          {
            id: '1',
            avatar: 'assets/imgs/mockdata/looking-for-person.jpg',
            title: '5年战友，今在何方',
            subTitle: '寻找北方军区一连三排，5班班长章三。',
            date: '2018/4/15',
            viewNumber: '1234',
            commentsNumber: '988',
          }];
        break;
      case 'thing':
        this.collectionList = [
          {
            id: '1',
            avatar: 'assets/imgs/mockdata/house.jpg',
            title: '专业司仪30年',
            subTitle: '专业婚庆司仪，因为专注所以专业，欢迎各位新人来电咨询。',
            date: '2018/4/15',
            viewNumber: '1234',
            commentsNumber: '988',
          },
          {
            id: '1',
            avatar: 'assets/imgs/mockdata/house.jpg',
            title: '专业司仪30年，婚礼庆典欢迎来询',
            subTitle: '专业婚庆司仪，因为专注所以专业，欢迎各位新人来电咨询。',
            date: '2018/4/15',
            viewNumber: '1234',
            commentsNumber: '988',
          },
          {
            id: '1',
            avatar: 'assets/imgs/mockdata/house.jpg',
            title: '专业司仪30年，婚礼庆典欢迎来询.专业司仪30年，婚礼庆典欢迎来询',
            subTitle: '专业司仪30年，婚礼庆典欢迎来询.专业婚庆司仪，因为专注所以专业，欢迎各位新人来电咨询。',
            date: '2018/4/15',
            viewNumber: '1234',
            commentsNumber: '988',
          }];
        break;
      case 'lose':
        this.collectionList = [
          {
            id: '1',
            img: 'assets/imgs/mockdata/goods-search.jpg',
            name: 'LV正品手提包',
            address: '红旗南路',
            phone: '111111',
            price: '123',
            date: '2018/4/15',
            viewNumber: '1234',
            commentsNumber: '988',
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
            commentsNumber: '988',
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
            commentsNumber: '988',
          }
        ];
        break;
      case 'old':
        this.collectionList = [
          {
            id: '1',
            img: 'assets/imgs/mockdata/goods-search.jpg',
            name: 'LV正品手提包',
            address: '红旗南路',
            phone: '111111',
            price: '123',
            date: '2018/4/15',
            viewNumber: '1234',
            commentsNumber: '988',
          }
        ];
        break;
    }
  }

  constructor(
    private navCtrl: NavController
  ) {
    this.getCollectionsLists(this.segmentModel);
  }

  viewGoodsDetailPage(value) {
    this.navCtrl.push(GoodsDetailComponent);
  }

  toPeopleDetailPage(item) {
    this.navCtrl.push(PeopleDetailComponent, {detail: item})
  }


  toTimesDetailPage(item) {
    this.navCtrl.push(TimeDetailComponent, {detail: item})
  }

}
