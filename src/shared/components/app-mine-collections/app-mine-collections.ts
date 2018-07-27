import {Component, Input} from '@angular/core';
import {Collections} from "../../resources/collections/collections";

@Component({
  selector: 'app-mine-collections',
  templateUrl: 'app-mine-collections.html'
})
export class AppMineCollectionsComponent {
  @Input() myCollectionsList: Collections[] = [];

  constructor() {
  }

}
