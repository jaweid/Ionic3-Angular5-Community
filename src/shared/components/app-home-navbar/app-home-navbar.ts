import { Component } from '@angular/core';
import {NavController} from "ionic-angular";
import {ChooseCityComponent} from "../../../pages/home/choose-city/choose-city";
import {SearchPage} from "../../common-pages/search/search";
import {NotificationsPage} from "../../../pages/home/notifications/notifications";

/**
 * Generated class for the AppHomeNavbarComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'app-home-navbar',
  templateUrl: 'app-home-navbar.html'
})
export class AppHomeNavbarComponent {

  constructor( private navCtrl:NavController) {
  }

  chooseCity(){
   this.navCtrl.push(ChooseCityComponent)
  }

  notifications(){
    this.navCtrl.push(NotificationsPage);
  }
  search(){
    this.navCtrl.push('SearchPage')
  }
}
