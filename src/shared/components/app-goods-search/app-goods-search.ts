import {Component, Input} from '@angular/core';
import {GoodsSearch} from "../../resources/goods-search/goods-search";

@Component({
  selector: 'app-goods-search',
  templateUrl: 'app-goods-search.html'
})
export class AppGoodsSearchComponent {
  @Input() goodsSearchList: GoodsSearch[] = [];

  constructor() {
  }

}
