import { Component } from '@angular/core';
import {PostSortForSearchPerson} from "../../../shared/consts/const";

/**
 * Generated class for the PostSearchPeopleComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'post-search-people',
  templateUrl: 'post-search-people.html'
})
export class PostSearchPeopleComponent {

  labelList:string[]=['魔兽世界','一区霜之哀伤'];
  postSortsColumnList=[];
  constructor() {
    this.postSortsColumnList[0]=PostSortForSearchPerson;
  }

}
