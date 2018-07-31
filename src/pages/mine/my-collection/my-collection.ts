import {Component} from '@angular/core';
import {AlertController, NavController} from "ionic-angular";
import {GoodsDetailComponent} from "../../goods-search/goods-detail/goods-detail";
import {PeopleDetailComponent} from "../../../shared/components/people-detail/people-detail";
import {TimeDetailComponent} from "../../times-trade/time-detail/time-detail";

@Component({
  selector: 'my-collection',
  templateUrl: 'my-collection.html'
})
export class MyCollectionComponent {
  collectionList: any = [];

  segmentModel = 'people';

  constructor(
    private alertCtrl: AlertController,
    private navCtrl:NavController
  ) {
    this.getCollectionsLists(this.segmentModel);
  }

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
            collectionDate: '2018年2月20日'
          },
          {
            id: '1',
            avatar: 'assets/imgs/mockdata/looking-for-person.jpg',
            title: '5年战友，今在何方',
            subTitle: '寻找北方军区一连三排，5班班长章三。',
            date: '2018/4/15',
            viewNumber: '1234',
            commentsNumber: '988',
            collectionDate: '2018年2月20日'

          },
          {
            id: '1',
            avatar: 'assets/imgs/mockdata/looking-for-person.jpg',
            title: '5年战友，今在何方',
            subTitle: '寻找北方军区一连三排，5班班长章三。',
            date: '2018/4/15',
            viewNumber: '1234',
            commentsNumber: '988',
            collectionDate: '2018年2月20日'
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
            collectionDate: '2018年2月20日'
          },
          {
            id: '1',
            avatar: 'assets/imgs/mockdata/house.jpg',
            title: '专业司仪30年，婚礼庆典欢迎来询',
            subTitle: '专业婚庆司仪，因为专注所以专业，欢迎各位新人来电咨询。',
            date: '2018/4/15',
            viewNumber: '1234',
            commentsNumber: '988',
            collectionDate: '2018年2月20日'
          },
          {
            id: '1',
            avatar: 'assets/imgs/mockdata/house.jpg',
            title: '专业司仪30年，婚礼庆典欢迎来询.专业司仪30年，婚礼庆典欢迎来询',
            subTitle: '专业司仪30年，婚礼庆典欢迎来询.专业婚庆司仪，因为专注所以专业，欢迎各位新人来电咨询。',
            date: '2018/4/15',
            viewNumber: '1234',
            commentsNumber: '988',
            collectionDate: '2018年2月20日'
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
            collectionDate: '2018年2月20日'
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
            collectionDate: '2018年2月20日'
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
            collectionDate: '2018年2月20日'
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
            collectionDate: '2018年2月20日'
          }
        ];
        break;
      case 'time':
        this.collectionList = [
          {
            id: '1',
            header: 'assets/imgs/mockdata/user1.jpg',
            name: '手把手教你从零开始弹古筝手把手教你从零开始弹古筝',
            price: '200',
            viewNumber: '1234',
            lover: '23',
            phone: '1234',
            address: '天津市南开区华苑海泰信息广场',
            imgList: [
              'assets/imgs/mockdata/home_time_1.jpg',
              'assets/imgs/mockdata/home_time_2.jpg',
              'assets/imgs/mockdata/home_time_3.jpg'
            ],
            collectionDate: '2018年2月20日'
          },
          {
            id: '1',
            header: 'assets/imgs/mockdata/user1.jpg',
            name: '手把手教你从零开始弹古筝手把手教你从零开始弹古筝',
            price: '200',
            viewNumber: '1234',
            lover: '23',
            phone: '1234',
            address: '天津市南开区华苑海泰信息广场',
            imgList: [
              'assets/imgs/mockdata/home_time_1.jpg',
              'assets/imgs/mockdata/home_time_2.jpg',
              'assets/imgs/mockdata/home_time_3.jpg'
            ],
            collectionDate: '2018年2月20日'
          }
        ];
        break;
    }
  }

  pressCollection(value) {
    this.alertCtrl.create({
      message: '确定删除当前收藏吗？',
      buttons: [
        {
          text: '取消'
        },
        {
          text: '确认',
          handler: () => {
          }
        }
      ]
    }).present();
  }

  viewGoodsDetailPage(value) {
    this.navCtrl.push(GoodsDetailComponent);
  }

  toPeopleDetailPage(item) {
    this.navCtrl.push(PeopleDetailComponent,{detail:item})
  }


  toTimesDetailPage(item) {
    this.navCtrl.push(TimeDetailComponent, {detail: item})
  }
}
