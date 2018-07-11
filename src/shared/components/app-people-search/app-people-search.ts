import {Component, Input} from '@angular/core';
import {PeopleSearch} from "../../../core/resources/people-search/people-search";
import {DefaultAvatar} from "../../../core/consts/config/const";

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

  placeholderPicture=DefaultAvatar;
  @Input() peopleSearchList:PeopleSearch[]=[];

  constructor() {
    console.log('Hello AppLookingForPersonComponent Component');
  }

}
