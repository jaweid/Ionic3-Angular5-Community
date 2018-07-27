import {Component, EventEmitter, Input, Output} from '@angular/core';
import {GoodsSearch} from "../../resources/goods-search/goods-search";

@Component({
  selector: 'app-goods-search',
  templateUrl: 'app-goods-search.html'
})
export class AppGoodsSearchComponent {
  @Input() goodsSearchList: GoodsSearch[] = [];
  @Output() clickGoodsItem: EventEmitter<undefined> = new EventEmitter();

  constructor() {
  }

  clickItem(item) {
    this.clickGoodsItem.emit(item);
  }

}
