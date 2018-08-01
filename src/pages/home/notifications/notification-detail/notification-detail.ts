import { Component } from '@angular/core';
import {NavParams} from "ionic-angular";

/**
 * Generated class for the NotificationDetailComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'notification-detail',
  templateUrl: 'notification-detail.html'
})
export class NotificationDetailComponent {

  detail;

  constructor(
    public navParams: NavParams
  ) {
    this.detail=this.navParams.get('data');
  }

}
