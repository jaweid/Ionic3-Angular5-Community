import { Component } from '@angular/core';
import {PostSortForSearchPerson} from "../../../shared/consts/const";

/**
 * Generated class for the PostSearchThingComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'post-search-thing',
  templateUrl: 'post-search-thing.html'
})
export class PostSearchThingComponent {
  labelList=['婚礼庆典'];
  postSortsColumnList=[];

  constructor() {
    this.postSortsColumnList[0]=PostSortForSearchPerson;

  }

}
