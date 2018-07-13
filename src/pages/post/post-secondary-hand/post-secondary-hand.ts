import { Component } from '@angular/core';

/**
 * Generated class for the PostSecondaryHandComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'post-secondary-hand',
  templateUrl: 'post-secondary-hand.html'
})
export class PostSecondaryHandComponent {

  text: string;

  constructor() {
    console.log('Hello PostSecondaryHandComponent Component');
    this.text = 'Hello World';
  }

}
