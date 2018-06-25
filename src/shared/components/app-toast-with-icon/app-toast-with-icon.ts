import { Component } from '@angular/core';
import {NavController, NavParams, ViewController} from "ionic-angular";

/**
 * Generated class for the AppToastWithIconComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'app-toast-with-icon',
  templateUrl: 'app-toast-with-icon.html'
})
export class AppToastWithIconComponent {

  public message:string='';
  public iconName:string='';
  constructor(public navCtrl: NavController,
              public viewCtrl:ViewController,
              public navParams: NavParams) {
    this.message=this.navParams.get('message');
    this.iconName=this.navParams.get('iconName');
  }
  ionViewDidLoad() {
    setTimeout(()=>{
      this.viewCtrl.dismiss();
    },1000);
  }
}
