import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GoodsSearchPage } from './goods-search';

@NgModule({
  declarations: [
    GoodsSearchPage,
  ],
  imports: [
    IonicPageModule.forChild(GoodsSearchPage),
  ],
})
export class GoodsSearchPageModule {}
