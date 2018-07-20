import {Component} from '@angular/core';
import {
  IonicPage,
  NavController,
  NavParams,
  ViewController,
  ModalController,
  Events,
  AlertController
} from 'ionic-angular';
import {AddShippingAddressPage} from './add-shipping-address/add-shipping-address';
import {Storage} from '@ionic/storage';

/**
 * Generated class for the MineAddressPage page.*
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mine-address',
  templateUrl: 'mine-address.html',
})
export class MineAddressPage {
  public addressList = [
    {
      address: "aaaaa",
      address_id: "71",
      city: "北京市",
      consignee: "刘佳文",
      country: "1",
      district: "东城区",
      mobile: "10000022222",
      province: "北京市",
      zipcode: "111111"
    },
    {
      address: "aaaaa",
      address_id: "71",
      city: "北京市",
      consignee: "刘佳文",
      country: "1",
      district: "东城区",
      mobile: "10000022222",
      province: "北京市",
      zipcode: "111111"
    },
    {
      address: "aaaaa",
      address_id: "71",
      city: "北京市",
      consignee: "刘佳文",
      country: "1",
      district: "东城区",
      mobile: "10000022222",
      province: "北京市",
      zipcode: "111111"
    }
  ];
  public getAddressModel: any = {
    api: 'user',
    act: 'address_list'
  };
  public showSpinner = false;

  constructor(
    public navCtrl: NavController,
    public viewCtrl: ViewController,
    public storage: Storage,
    public events: Events,
    public modalCtrl: ModalController,
    public navParams: NavParams,
    public alertCtrl: AlertController
  ) {

  }

  ionViewDidLoad() {

  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  getAddressList() {

  }


  chooseAddress(address) {
    this.storage.remove('defaultAddress');
    this.storage.set('defaultAddress', address);
    this.navCtrl.pop();

  }

  editShippingAddress(item) {
    let addressModal = this.modalCtrl.create(AddShippingAddressPage, {editAddress: item});
    addressModal.present();
    addressModal.onDidDismiss((data) => {
      if (data) {
        this.getAddressList();
      }
    })
  }

  addAddress() {
    let addressModal = this.modalCtrl.create(AddShippingAddressPage);
    addressModal.present();
    addressModal.onDidDismiss((data) => {
      if (data) {
        this.getAddressList();
      }
    })
  }

  presentConfirm(item) {
    let alert = this.alertCtrl.create({
      title: '提示信息',
      message: '您确认要删除这条地址信息吗?',
      buttons: [
        {
          text: '取消',
          role: 'cancel',
          handler: () => {
          }
        },
        {
          text: '确认',
          handler: () => {
            this.deleteAddress(item);
          }
        }
      ]
    });
    alert.present();
  }

  deleteAddress(item) {


  }
}
