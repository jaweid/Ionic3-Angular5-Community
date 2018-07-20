import { Component } from '@angular/core';
import {NavController, NavParams, ViewController} from 'ionic-angular';
import {Storage} from '@ionic/storage';
import {HelperService} from "../../../../shared/services/helper.service";

/**
 * Generated class for the AddShippingAddressPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-add-shipping-address',
  templateUrl: 'add-shipping-address.html',
})
export class AddShippingAddressPage {
  public addressModel:any={
    api:'user',
    act:'edit_address'
  };

  cityData: any[]; //城市数据
  cityName:string = ''; //初始化城市名
  code:string; //城市编码
  constructor(public navCtrl: NavController,
              public viewCtrl:ViewController,
              public storage:Storage,
              private help: HelperService,
  public navParams: NavParams) {
    let addressPassed=this.navParams.get('editAddress');
    if(addressPassed){
      this.addressModel=addressPassed;
      this.cityName=this.addressModel.province+'-'+this.addressModel.city+'-'+this.addressModel.district;
    }

    this.setCityPickerData();
  }

  dismiss(){
    this.viewCtrl.dismiss();
  }

  confirmAddress(){
    let addressPassed=this.navParams.get('editAddress');
   if(addressPassed){
    delete  this.addressModel.isDefault;
    this.addressModel.api='user';
    this.addressModel.act='edit_address';
    this.addAddress();
   }else {
     this.addAddress();
   }
  }


  addAddress(){

  }
  /**
   * 获取城市数据
   */
  setCityPickerData(){
    this.help.getCitiesData()
      .subscribe(data => {
        this.cityData = data;
      });

  }

  /**
   * 城市选择器被改变时触发的事件
   * @param event
   */
  cityChange(event){
    this.addressModel.province=event.province.text;
    this.addressModel.city=event.city.text;
    this.addressModel.district=event.region.text;
    // console.log(event);
    // this.code = event['region'].value
  }


}
