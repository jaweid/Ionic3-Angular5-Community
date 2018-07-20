import { Component } from '@angular/core';

/**
 * Generated class for the WithdrawCompletedComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'withdraw-completed',
  templateUrl: 'withdraw-completed.html'
})
export class WithdrawCompletedComponent {

  text: string;

  constructor() {
    console.log('Hello WithdrawCompletedComponent Component');
    this.text = 'Hello World';
  }

}
