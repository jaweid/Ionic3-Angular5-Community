import { Component } from '@angular/core';

/**
 * Generated class for the SettingPasswordComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'setting-password',
  templateUrl: 'setting-password.html'
})
export class SettingPasswordComponent {

  text: string;

  constructor() {
    console.log('Hello SettingPasswordComponent Component');
    this.text = 'Hello World';
  }

}
