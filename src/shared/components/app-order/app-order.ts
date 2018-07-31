import {Component, Input} from '@angular/core';
import {AlertController, NavController, NavParams, ActionSheetController, ModalController} from 'ionic-angular';
import {Order} from "../../resources/order/order";
import {TimeOrderCommentPage} from "../../common-pages/time-order-comment/time-order-comment";


@Component({
  selector: 'app-order',
  templateUrl: 'app-order.html'
})
export class AppOrderComponent {
  @Input("OrderLists") orderLists:Order[];

  constructor(public navCtrl: NavController,
              public modalCtrl: ModalController,
              public alertCtrl: AlertController,
              public navParams: NavParams) {
  }

  comment(item){
    this.navCtrl.push('TimeOrderCommentPage',{detail:item})
  }


}
