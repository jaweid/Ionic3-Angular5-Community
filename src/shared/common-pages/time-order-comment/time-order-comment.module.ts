import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TimeOrderCommentPage } from './time-order-comment';
import {SharedModule} from "../../shared.module";

@NgModule({
  declarations: [
    TimeOrderCommentPage,
  ],
  imports: [
    IonicPageModule.forChild(TimeOrderCommentPage),
    SharedModule
  ],
})
export class TimeOrderCommentPageModule {}
