import {Component, EventEmitter, Input, Output} from '@angular/core';

/**
 * Generated class for the AppPostComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'app-post',
  templateUrl: 'app-post.html'
})
export class AppPostComponent {
  fileObjList: string[] = [];
  @Input() subTitle: string = '';
  @Input() labels:string[];
  @Input() postBtnText:string='';
  @Input() subPriceTitle:string='';
  @Input() address:string='';
  @Output() submit: EventEmitter<undefined> = new EventEmitter();


  constructor() {
  }


  submitPost(value) {
    this.submit.emit(value)
  }
}
