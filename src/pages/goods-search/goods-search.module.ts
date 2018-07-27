import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {GoodsSearchPage} from './goods-search';
import {SharedModule} from "../../shared/shared.module";
import {GoodsDetailComponent} from "./goods-detail/goods-detail";

@NgModule({
  declarations: [
    GoodsSearchPage, GoodsDetailComponent
  ],
  imports: [
    IonicPageModule.forChild(GoodsSearchPage),
    SharedModule
  ],
  entryComponents: [GoodsDetailComponent],
})
export class GoodsSearchPageModule {
}
