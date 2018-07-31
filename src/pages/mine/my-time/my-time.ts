import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {PostSecondaryTimeComponent} from "../../post/post-secondary-time/post-secondary-time";
import {MyPostTimeComponent} from "./my-post-time/my-post-time";
import {MyPostTimeOrderComponent} from "./my-post-time-order/my-post-time-order";

/**
 * Generated class for the MyTimePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-my-time',
  templateUrl: 'my-time.html',
})
export class MyTimePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  post() {
    this.navCtrl.push(PostSecondaryTimeComponent);
  }

  myPostTime(){
    this.navCtrl.push(MyPostTimeComponent);
  }

  myPostOrder(type){
    this.navCtrl.push(MyPostTimeOrderComponent,{timeOrderType:type});
  }
}
