import {Component} from '@angular/core';
import {NavParams} from "ionic-angular";

/**
 * Generated class for the MyPostTimeOrderDetailComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'my-post-time-order-detail',
  templateUrl: 'my-post-time-order-detail.html'
})
export class MyPostTimeOrderDetailComponent {

  orderDetail: any = {};

  constructor(
    public navParam: NavParams,
  ) {
    this.orderDetail=this.navParam.get('order');
  }

}
