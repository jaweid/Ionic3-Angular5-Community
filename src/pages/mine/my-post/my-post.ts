import { Component } from '@angular/core';

/**
 * Generated class for the MyPostComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'my-post',
  templateUrl: 'my-post.html'
})
export class MyPostComponent {

  text: string;

  constructor() {
    console.log('Hello MyPostComponent Component');
    this.text = 'Hello World';
  }

}
