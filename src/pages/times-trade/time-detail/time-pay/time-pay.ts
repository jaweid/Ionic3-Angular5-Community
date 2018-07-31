import {Component} from '@angular/core';
import {PAY_TYPE_LIST} from "../../../../shared/consts/const";
import {ModalController} from "ionic-angular";

/**
 * Generated class for the TimePayComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'time-pay',
  templateUrl: 'time-pay.html'
})
export class TimePayComponent {
  public payList = [];
  public choosedPayType: number = 0;

  constructor(
    private modalCtrl: ModalController
  ) {
    this.payList = PAY_TYPE_LIST;

  }

  confirmBuy() {
    switch (this.choosedPayType) {
      case 2:
        const myModal = this.modalCtrl.create('InputPayPasswordPage', {orderId: ''}, {
          cssClass: 'custom-pay-psd-modal'
        });
        myModal.present();
        myModal.onDidDismiss((newData) => {

        });

        break;
    }
  }

}
