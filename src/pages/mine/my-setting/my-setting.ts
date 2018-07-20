import { Component } from '@angular/core';

/**
 * Generated class for the MySettingComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'my-setting',
  templateUrl: 'my-setting.html'
})
export class MySettingComponent {

  text: string;

  constructor() {
    console.log('Hello MySettingComponent Component');
    this.text = 'Hello World';
  }

}
