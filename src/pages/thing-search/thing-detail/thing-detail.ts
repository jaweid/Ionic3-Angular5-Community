import { Component } from '@angular/core';

/**
 * Generated class for the ThingDetailComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'thing-detail',
  templateUrl: 'thing-detail.html'
})
export class ThingDetailComponent {

  text: string;

  constructor() {
    console.log('Hello ThingDetailComponent Component');
    this.text = 'Hello World';
  }

}
