import { Component } from '@angular/core';
import {Time} from "../../../shared/resources/timeTrade/time";
import {Collections} from "../../../shared/resources/collections/collections";

/**
 * Generated class for the MyCollectionComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'my-collection',
  templateUrl: 'my-collection.html'
})
export class MyCollectionComponent {
  collectionList: Collections[] = [
    {
      date:'2018年2月20日',
      time:{id: '1',
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
        ]}
    }
  ];


  constructor() {
  }

}
