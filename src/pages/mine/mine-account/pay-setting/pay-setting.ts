import { Component } from '@angular/core';

/**
 * Generated class for the PaySettingComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'pay-setting',
  templateUrl: 'pay-setting.html'
})
export class PaySettingComponent {

  text: string;

  constructor() {
    console.log('Hello PaySettingComponent Component');
    this.text = 'Hello World';
  }

}
