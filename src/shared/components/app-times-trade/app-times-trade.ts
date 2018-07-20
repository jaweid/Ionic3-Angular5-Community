import {Component, Input} from '@angular/core';
import {Time} from "../../resources/timeTrade/time";
import {DefaultAvatar} from "../../consts/const";

/**
 * Generated class for the AppTimesTradeComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'app-times-trade',
  templateUrl: 'app-times-trade.html'
})
export class AppTimesTradeComponent {
  placeholderPicture=DefaultAvatar;
  @Input() timeList:Time[]=[];

  constructor() {
  }

}
