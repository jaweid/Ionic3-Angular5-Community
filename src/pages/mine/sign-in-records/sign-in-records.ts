import { Component } from '@angular/core';

/**
 * Generated class for the SignInRecordsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'sign-in-records',
  templateUrl: 'sign-in-records.html'
})
export class SignInRecordsComponent {

  record=[
    {
      text:'6',
      date:'2018-6-22'
    },
    {
      text:'6',
      date:'2018-6-22'
    },
    {
      text:'6',
      date:'2018-6-22'
    }
  ]
  text: string;

  constructor() {
    console.log('Hello SignInRecordsComponent Component');
    this.text = 'Hello World';
  }

}
