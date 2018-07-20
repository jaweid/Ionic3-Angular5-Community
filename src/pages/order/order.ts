import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Order} from "../../shared/resources/order/order";

/**
 * Generated class for the OrderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-order',
  templateUrl: 'order.html',
})
export class OrderPage {
  segmentModel: string = '';

  public orderList:Order[]=[];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.getOrderLists('');
  }

  getOrderLists(value) {
    this.orderList=[
      {
        id:'1',
        orderSN:'489784654687846546',
        status:'待支付',
        statusCode:'1',
        img:'assets/imgs/mockdata/user1.jpg',
        title:"手把手教你从零开始弹古筝",
        price:'200',
        unit:'小时',
        volume:'4',
        sumPrice:'800'
      },
      {
        id:'1',
        orderSN:'489784654687846546',
        status:'待支付',
        statusCode:'1',
        img:'assets/imgs/mockdata/user1.jpg',
        title:"手把手教你从零开始弹古筝",
        price:'200',
        unit:'小时',
        volume:'4',
        sumPrice:'800'
      },{
        id:'1',
        orderSN:'489784654687846546',
        status:'待支付',
        statusCode:'1',
        img:'assets/imgs/mockdata/user1.jpg',
        title:"手把手教你从零开始弹古筝",
        price:'200',
        unit:'小时',
        volume:'4',
        sumPrice:'800'
      },{
        id:'1',
        orderSN:'489784654687846546',
        status:'待支付',
        statusCode:'1',
        img:'assets/imgs/mockdata/user1.jpg',
        title:"手把手教你从零开始弹古筝",
        price:'200',
        unit:'小时',
        volume:'4',
        sumPrice:'800'
      },
    ];
  }
}
