import { Component } from '@angular/core';
import {ViewController} from "ionic-angular";

/**
 * Generated class for the TimeDetailAmountModalComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'time-detail-amount-modal',
  templateUrl: 'time-detail-amount-modal.html'
})
export class TimeDetailAmountModalComponent {

  text: string;

  constructor(
    private viewCtrl:ViewController
  ) {
    console.log('Hello TimeDetailAmountModalComponent Component');
    this.text = 'Hello World';
  }

  closeModal(){
    this.viewCtrl.dismiss();
  }

}
