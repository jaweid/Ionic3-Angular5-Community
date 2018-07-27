import {Component} from '@angular/core';
import {Collections} from "../../../shared/resources/collections/collections";

@Component({
  selector: 'my-collection',
  templateUrl: 'my-collection.html'
})
export class MyCollectionComponent {
  collectionList: Collections[] = [
    {
      date: '2018年2月20日',
      time: {
        id: '1',
        header: 'assets/imgs/mockdata/user1.jpg',
        name: '手把手教你从零开始弹古筝手把手教你从零开始弹古筝',
        price: '200',
        viewNumber: '1234',
        lover: '23',
        phone: '1234',
        address:'天津市南开区华苑海泰信息广场',
        imgList: [
          'assets/imgs/mockdata/home_time_1.jpg',
          'assets/imgs/mockdata/home_time_2.jpg',
          'assets/imgs/mockdata/home_time_3.jpg'
        ]
      }
    },
    {
      date: '2018年2月20日',
      time: {
        id: '1',
        header: 'assets/imgs/mockdata/user1.jpg',
        name: '手把手教你从零开始弹古筝手把手教你从零开始弹古筝',
        price: '200',
        viewNumber: '1234',
        lover: '23',
        phone: '1234',
        address:'天津市南开区华苑海泰信息广场',
        imgList: [
          'assets/imgs/mockdata/home_time_1.jpg',
          'assets/imgs/mockdata/home_time_2.jpg',
          'assets/imgs/mockdata/home_time_3.jpg'
        ]
      }
    },
    {
      date: '2018年2月20日',
      time: {
        id: '1',
        header: 'assets/imgs/mockdata/user1.jpg',
        name: '手把手教你从零开始弹古筝手把手教你从零开始弹古筝',
        price: '200',
        viewNumber: '1234',
        lover: '23',
        phone: '1234',
        address:'天津市南开区华苑海泰信息广场',
        imgList: [
          'assets/imgs/mockdata/home_time_1.jpg',
          'assets/imgs/mockdata/home_time_2.jpg',
          'assets/imgs/mockdata/home_time_3.jpg'
        ]
      }
    }
  ];


  constructor() {
  }

}
