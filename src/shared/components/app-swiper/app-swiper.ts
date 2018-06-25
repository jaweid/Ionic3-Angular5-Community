import {Component, Input} from '@angular/core';
import {HelperService} from "../../services/helper.service";

/**
 * Generated class for the AppSwiperComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'app-swiper',
  templateUrl: 'app-swiper.html'
})
export class AppSwiperComponent {
  @Input() ImgList=[];

  constructor(
  ) {
  }

  ionViewDidLoad(){
  }



}
