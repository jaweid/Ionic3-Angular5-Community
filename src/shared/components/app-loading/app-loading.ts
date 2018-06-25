import { Component } from '@angular/core';

/**
 * Generated class for the AppLoadingComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'app-loading',
  templateUrl: 'app-loading.html'
})
export class AppLoadingComponent {

  text: string;

  constructor() {
    console.log('Hello AppLoadingComponent Component');
    this.text = 'Hello World';
  }

}
