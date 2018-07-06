import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GoodsSearchPage } from './goods-search';
import {SharedModule} from "../../shared/shared.module";

@NgModule({
  declarations: [
    GoodsSearchPage,
  ],
  imports: [
    IonicPageModule.forChild(GoodsSearchPage),
    SharedModule
  ],
})
export class GoodsSearchPageModule {}
