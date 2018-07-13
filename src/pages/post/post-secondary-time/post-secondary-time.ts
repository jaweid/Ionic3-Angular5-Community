import { Component } from '@angular/core';

/**
 * Generated class for the PostSecondaryTimeComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'post-secondary-time',
  templateUrl: 'post-secondary-time.html'
})
export class PostSecondaryTimeComponent {

  text: string;

  constructor() {
    console.log('Hello PostSecondaryTimeComponent Component');
    this.text = 'Hello World';
  }

}
