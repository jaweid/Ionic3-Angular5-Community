import { Component } from '@angular/core';

/**
 * Generated class for the ScoreRulesComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'score-rules',
  templateUrl: 'score-rules.html'
})
export class ScoreRulesComponent {

  text: string;

  constructor() {
    console.log('Hello ScoreRulesComponent Component');
    this.text = 'Hello World';
  }

}
