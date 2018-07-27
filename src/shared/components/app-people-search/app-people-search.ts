import {Component, EventEmitter, Input, Output} from '@angular/core';
import {PeopleSearch} from "../../resources/people-search/people-search";
import {DefaultAvatar} from "../../consts/const";

/**
 * Generated class for the AppPeopleSearchComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'app-people-search',
  templateUrl: 'app-people-search.html'
})
export class AppPeopleSearchComponent {

  placeholderPicture = DefaultAvatar;
  @Input() peopleSearchList: PeopleSearch[] = [];
  @Output() clickPeopleItem: EventEmitter<undefined> = new EventEmitter();

  constructor() {
  }

  clickItem(item) {
    this.clickPeopleItem.emit(item);
  }
}
