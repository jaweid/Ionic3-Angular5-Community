import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ThingSearchPage } from './thing-search';
import {SharedModule} from "../../shared/shared.module";

@NgModule({
  declarations: [
    ThingSearchPage,
  ],
  imports: [
    IonicPageModule.forChild(ThingSearchPage),
    SharedModule
  ],
})
export class ThingSearchPageModule {}
