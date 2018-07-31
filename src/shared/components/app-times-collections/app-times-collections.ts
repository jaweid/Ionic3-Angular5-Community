import {Component, EventEmitter, Input, Output} from '@angular/core';

/**
 * Generated class for the AppTimesCollectionsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'app-times-collections',
  templateUrl: 'app-times-collections.html'
})
export class AppTimesCollectionsComponent {

  @Input() myCollectionsList: any = [];
  @Output() onPressItem: EventEmitter<undefined> = new EventEmitter();
  @Output() clickTimesItem: EventEmitter<undefined> = new EventEmitter();

  constructor() {
  }

  onPress(item) {
    this.onPressItem.emit(item);
  }

  clickItem(item) {
    this.clickTimesItem.emit(item);
  }
}
