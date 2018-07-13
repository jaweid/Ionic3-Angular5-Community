import {Component} from '@angular/core';

/**
 * Generated class for the PostSecondaryLostComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'post-secondary-lost',
  templateUrl: 'post-secondary-lost.html'
})
export class PostSecondaryLostComponent {
  labelList = ['女式挎包', '黑色', '阿玛尼'];
  text: string;

  constructor() {
    console.log('Hello PostSecondaryLostComponent Component');
    this.text = 'Hello World';
  }

}
