import { Component } from '@angular/core';

/**
 * Generated class for the ChooseCityComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'choose-city',
  templateUrl: 'choose-city.html'
})
export class ChooseCityComponent {

  text: string;

  constructor() {
    console.log('Hello ChooseCityComponent Component');
    this.text = 'Hello World';
  }

}
