import { Component } from '@angular/core';
import {PostSortForSearchPerson} from "../../../shared/consts/const";

/**
 * Generated class for the PostSecondaryHandComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'post-secondary-hand',
  templateUrl: 'post-secondary-hand.html'
})
export class PostSecondaryHandComponent {
  postSortsColumnList=[];

  constructor() {
    this.postSortsColumnList[0]=PostSortForSearchPerson;

  }

}
