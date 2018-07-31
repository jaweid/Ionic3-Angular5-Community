import {Component} from '@angular/core';
import {ActionSheetController, Modal, ModalController, NavController} from "ionic-angular";
import {TimeDetailAmountModalComponent} from "./time-detail-amount-modal/time-detail-amount-modal";
import {TimePayComponent} from "./time-pay/time-pay";


@Component({
  selector: 'time-detail',
  templateUrl: 'time-detail.html'
})
export class TimeDetailComponent {

  public type = 'detail';
  item = {
    id: '1',
    header: 'assets/imgs/mockdata/user1.jpg',
    name: '手把手教你从零开始弹古筝手把手教你从零开始弹古筝',
    viewNumber: '1234',
    sellNumber: '23',
    price: '200',
    phoneNumber: '13345551234',
    startDate: '2018-5-15',
    endDate: '2018-5-16',
    startTime: '18:00',
    endTime: '20:00',
    phone: '1234',
    address: '天津市南开区华苑海泰信息广场',
    img: 'assets/imgs/mockdata/time-detail.png',
    description: '本次初级教程非常细致的讲解了古筝基本指法，并在训练过程中注意了以下三个步骤：\n' +
    '一是指法练习，让学生在没有负担的情况下简单掌握古筝的基本技巧；\n' +
    '二是音阶练习，使学生在轻松地掌握了古筝的基本技巧之后，使技巧逐步复杂化，并把单一的技巧有组织地进行衔接，使音乐流动起来。',
    comments: [
      {
        avatar: 'assets/imgs/mockdata/user2.jpg',
        alias: '封弊者',
        date: '2018年5月18日',
        content: '老师教的很好呢~',
        star: 4
      },
      {
        avatar: 'assets/imgs/mockdata/user2.jpg',
        alias: '封弊者',
        date: '2018年5月18日',
        content: '老师教的很好呢~',
        star: 2
      }
    ]
  };

  constructor(
    private modalCtrl: ModalController,
    public actionSheetCtrl: ActionSheetController,
    private navCtrl: NavController
  ) {
  }

  chooseAmountModal() {
    let attrModal = this.modalCtrl.create(TimeDetailAmountModalComponent, {}, {cssClass: 'inset-modal-specification'});
    attrModal.present();
    attrModal.onDidDismiss((data) => {
      if (data) {
      }
    })
  }

  presentActionSheet() {
    const actionSheet = this.actionSheetCtrl.create({
      title: this.item.phoneNumber,
      buttons: [{
        text: '呼叫',
        handler: () => {
          console.log('Archive clicked');
        }
      }, {
        text: '取消',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }
      ]
    });
    actionSheet.present();
  }

  buyNow() {
    this.navCtrl.push(TimePayComponent)
  }

}
