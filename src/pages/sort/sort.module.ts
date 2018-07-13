import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SortPage } from './sort';
import {SharedModule} from "../../shared/shared.module";

@NgModule({
  declarations: [
    SortPage,
  ],
  imports: [
    IonicPageModule.forChild(SortPage),
    SharedModule
  ],
})
export class SortPageModule {}
