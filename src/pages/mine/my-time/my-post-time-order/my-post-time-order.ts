import {Component} from '@angular/core';
import {Order} from "../../../../shared/resources/order/order";
import {NavController, NavParams} from "ionic-angular";
import {MyPostTimeOrderDetailComponent} from "./my-post-time-order-detail/my-post-time-order-detail";

/**
 * Generated class for the MyPostTimeOrderComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'my-post-time-order',
  templateUrl: 'my-post-time-order.html'
})
export class MyPostTimeOrderComponent {
  public orderList = [];
  public type = '';

  constructor(
    public navParam: NavParams,
    public navCtrl: NavController
  ) {
    this.type = this.navParam.get('timeOrderType');
    this.getList();
  }


  getList() {
    switch (this.type) {
      case 'uncompleted':
        this.orderList = [
          {
            id: '1',
            orderSN: '489784654687846546',
            status: '待支付',
            statusCode: '1',
            img: 'assets/imgs/mockdata/user1.jpg',
            title: "手把手教你从零开始弹古筝,手把手教你从零开始弹古筝",
            price: '200',
            unit: '小时',
            volume: '4',
            sumPrice: '800'
          },
          {
            id: '1',
            orderSN: '489784654687846546',
            status: '待支付',
            statusCode: '3',
            img: 'assets/imgs/mockdata/user1.jpg',
            title: "手把手教你从零开始弹古筝",
            price: '200',
            unit: '小时',
            volume: '4',
            sumPrice: '800'
          }, {
            id: '1',
            orderSN: '489784654687846546',
            status: '待支付',
            statusCode: '3',
            img: 'assets/imgs/mockdata/user1.jpg',
            title: "手把手教你从零开始弹古筝",
            price: '200',
            unit: '小时',
            volume: '4',
            sumPrice: '800'
          }, {
            id: '1',
            orderSN: '489784654687846546',
            status: '待支付',
            statusCode: '1',
            img: 'assets/imgs/mockdata/user1.jpg',
            title: "手把手教你从零开始弹古筝",
            price: '200',
            unit: '小时',
            volume: '4',
            sumPrice: '800'
          },
        ];
        break;
      case 'completed':
        this.orderList = [
          {
            id: '1',
            orderSN: '489784654687846546',
            status: '已支付',
            statusCode: '1',
            img: 'assets/imgs/mockdata/user1.jpg',
            title: "手把手教你从零开始弹古筝",
            price: '200',
            unit: '小时',
            volume: '4',
            sumPrice: '800'
          },
          {
            id: '1',
            orderSN: '489784654687846546',
            status: '退款',
            statusCode: '4',
            img: 'assets/imgs/mockdata/user1.jpg',
            title: "手把手教你从零开始弹古筝",
            price: '200',
            unit: '小时',
            volume: '4',
            sumPrice: '800'
          }
        ];
        break;
    }
  }

  orderDetail(item) {
    if (this.type === 'completed') {
      return;
    }
    this.navCtrl.push(MyPostTimeOrderDetailComponent, {order: item})
  }
}
