import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ThingSearchPage } from './thing-search';

@NgModule({
  declarations: [
    ThingSearchPage,
  ],
  imports: [
    IonicPageModule.forChild(ThingSearchPage),
  ],
})
export class ThingSearchPageModule {}
